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
    for (let table in tables)
    {
        console.log(table.innerText);
    }

}

function main()
{
    let artists = $("search-bar");
    if (artists !== null)
    {
        createElement("p", "Filter table", "", "", null, artists);
        createElement("input", "", "", "",
            [
                [ "type", "text" ],
                [ "aria-label", "Table filter field" ],
                [ "name", "Table filter field" ]
            ],
        artists).addEventListener("change", (e) => {
            artistTableShowHide(e.target.value);
        });
    }
}

main();