/* apps.js will be used for interactivity of the site */
'use strict'

const switcher = document.querySelector('.btn'); /* gets the reference to the theme changing button */
var projects = 0;

function addSticky () {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "sticky";
    newDiv.id = projects+1;
    
    const x = document.createElement("section");
    x.className = "section";
    x.id = "tier-name";
    x.contentEditable = "true";
    x.innerText = "tier"

    const y = document.createElement("section");
    y.className = "section";
    y.id = "buttons";
    y.innerText = "btns here"

    newDiv.appendChild(x);
    newDiv.appendChild(y);

    // add the newly created element and its content into the DOM
    document.getElementById("tierlist").appendChild(newDiv);
};

function deleteSticky () {
    var row = document.getElementById(num_rows);
    row.remove();
    num_rows = num_rows - 1;
};