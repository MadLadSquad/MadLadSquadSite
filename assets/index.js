'use strict';

// Bundled by js.Build from node_modules (run `npm ci` first). The common highlight.js build covers the languages the
// docs use, cmake is registered on top of it
import hljs from "highlight.js/lib/common";
import cmake from "highlight.js/lib/languages/cmake";
import twemoji from "@twemoji/api";

/**
 * Helper to quickly create an element
 * @param { string } tag - HTML element tag type
 * @param { string } content - Text content of the element
 * @param { string } id - ID of the element
 * @param { string } className - Class name of the element
 * @param { Array<Array<string>>|null } additionalInfo - Additional key-value pairs to add to the element
 * @param { HTMLElement } parent - Parent element to attach to
 * @return { HTMLElement } The element in question
 */
function createElement(tag, content, id, className, additionalInfo, parent)
{
    let element = document.createElement(tag);
    element.textContent = content;
    element.id = id;
    element.className = className;

    if (additionalInfo !== null)
        for (let info in additionalInfo)
            element[additionalInfo[info][0]] = additionalInfo[info][1];

    parent.appendChild(element);

    return element;
}

/**
 * Checks if a string is an integer number
 * @param { string } str - Number as string
 * @return { boolean } True if it's an integer
 */
function isInt(str)
{
    return !isNaN(str);
}


/**
 * Troll jQuery users
 * @param x - ID of the element to request
 * @returns {HTMLElement|null} Element returned or null
 */
function $(x)
{
    return document.getElementById(x);
}

function artistTableShowHide(match)
{
    let tables = document.querySelectorAll("td");
    for (let i = 0; i < tables.length; i++)
    {
        let it = tables[i];
        it.style.visibility = "visible";
        if (!isInt(it.innerText))
        {
            if (match !== "" && !it.innerText.toLowerCase().includes(match))
                it.style.visibility = "hidden";
        }
    }

}

/**
 * Wires up the modal navigation drawer shown on narrow screens
 */
function setupNavDrawer()
{
    let button = $("nav-drawer-button");
    let drawer = $("nav-drawer");
    let scrim = $("nav-scrim");
    if (button === null || drawer === null || scrim === null)
        return;

    let setOpen = (open) => {
        drawer.hidden = !open;
        scrim.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
        if (open)
            drawer.querySelector("a").focus();
        else
            button.focus();
    };

    button.addEventListener("click", () => setOpen(true));
    scrim.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !drawer.hidden)
            setOpen(false);
    });
    // Close it if the window is widened past the breakpoint where the inline nav comes back
    window.matchMedia("(min-width: 840px)").addEventListener("change", (e) => {
        if (e.matches && !drawer.hidden)
            setOpen(false);
    });
}

/**
 * Raises the app bar once the page is scrolled under it
 */
function setupAppBar()
{
    let bar = $("app-bar");
    if (bar === null)
        return;

    let update = () => bar.classList.toggle("scrolled", window.scrollY > 0);
    window.addEventListener("scroll", update, { passive: true });
    update();
}

/**
 * Highlights the current page in the docs navigation and keeps it expanded on wide screens
 */
function setupDocsNav()
{
    let nav = document.querySelector(".docs-nav");
    if (nav === null)
        return;

    // hugo server serves pages as foo.html while the live site uses /foo
    let normalise = (path) => decodeURIComponent(path).replace(/\.html$/, "");
    let here = normalise(location.pathname);
    for (let link of nav.querySelectorAll("a"))
    {
        if (link.origin === location.origin && normalise(link.pathname) === here)
        {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    }

    let wide = window.matchMedia("(min-width: 1024px)");
    nav.open = wide.matches;
    wide.addEventListener("change", (e) => nav.open = e.matches);
}

function main()
{
    setupNavDrawer();
    setupAppBar();
    setupDocsNav();

    let artists = $("search-bar");
    if (artists !== null)
    {
        createElement("p", "Филтрирай таблицата:", "", "", null, artists);
        createElement("input", "", "", "",
            [
                [ "type", "text" ],
                [ "aria-label", "Table filter field" ],
                [ "name", "Table filter field" ]
            ],
        artists).addEventListener("input", (e) => {
            artistTableShowHide(e.target.value.toLowerCase());
        });
    }
    let demo = $("demo-div");
    if (demo !== null)
    {
        createElement("iframe", "", "", "",     
            [ 
                [ "src", "https://uimgui.madladsquad.com/" ],
                [ "style", "width: 100%; height: 100%; flex-grow: 1;" ],
            ], demo);
    }

    hljs.highlightAll();

    // Browser-independent emoji rendering: twemoji swaps native emoji for the SVGs published at /twemoji/
    twemoji.parse(document.body, {
        base: "/",
        folder: "twemoji",
        ext: ".svg"
    });
}

hljs.registerLanguage("cmake", cmake);
main();
