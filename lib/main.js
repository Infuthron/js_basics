"use strict";

const main = {

    // Declare variables
    year: 2018,
    title: "JavaScript Basis",

    init: () => {
        document.title = main.title + " " + main.year;
        document.getElementById("pageTitle").innerText = main.title;
    },

    addLine(line) {
        return line + "</br>";
    },

    updateContent(header, description) {
        document.getElementById("contentHeader").innerText = header;

        if (description) {
            document.getElementById("contentPlaceholder").innerHTML = description;
        }
    },

    addContenItem(text, delegateFunction) {
        //Create an anchor element
        let a = document.createElement("a");
        //Set some properties
        a.href = "#";
        a.addEventListener("click", delegateFunction);
        a.innerText = text;
        //Add the anchor element to the DOM
        let element = document.getElementById("navigation");
        element.appendChild(a); 
    },

    getPeriod(startYear, currentYear) {
        var result = startYear;
        if (currentYear > startYear) {
            result += "-" + currentYear;
        }
        return result;
    },

    getBulletListFromArray(array) {
        var list = "<ul>";
        for (var i = 0; i < array.length; i++) {
            list += "<li>" + array[i] + "</li>";
        }
        list += "</ul>";
        return list;
    },
   
}

main.init();