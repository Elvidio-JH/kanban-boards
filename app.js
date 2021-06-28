/* apps.js will be used for interactivity of the site */
'use strict'

const switcher = document.querySelector('.btn'); /* gets the reference to the theme changing button */
var projects = 0;

function addSticky (id) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "sticky";
    newDiv.id = projects+1;
    
    const x = document.createElement("section");
    x.className = "project";
    x.id = "project-name";
    x.innerText = "project-name"

    newDiv.appendChild(x);

    // add the newly created element and its content into the DOM
    document.getElementById(id).appendChild(newDiv);
};

function deleteSticky () {
    var row = document.getElementById(projects);
    row.remove();
    projects = projects - 1;
};