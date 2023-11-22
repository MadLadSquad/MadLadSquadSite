'use strict';

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

function main()
{
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
        artists).addEventListener("change", (e) => {
            console.log(e.target.value);
            artistTableShowHide(e.target.value.toLowerCase());
        });
    }
}

main();