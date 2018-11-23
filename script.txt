"use strict";

// Declare variables
const studentName = "Aleks Czajka";
const studentGroup = "MD2A";
const year = main.year;


// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;

    let ofGroup = document.getElementsByClassName("studentGroup");
    for(let i = 0 ; i < ofGroup.length ; i++) {
        ofGroup[i].innerText = studentGroup;
    }

    let thisYear = document.getElementsByClassName("pageYear");
    for(let i = 0 ; i < thisYear.length ; i++) {
        thisYear[i].innerText = year;
    }

    let thisStudentName = document.getElementsByClassName("studentName");
    for(let i = 0 ; i < thisStudentName.length ; i++) {
        thisStudentName[i].innerText = studentName;
    }

    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);

    main.addContenItem("Variabelen", vars);

    main.addContenItem("Objecten", objecten);

    main.addContenItem("Array", array);

    main.addContenItem("AJAX - Table", ajax_table);
    // Activate the first navigation link
    intro();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Aleks Czajka";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p);
}

function  vars() {
    let postal_code = "6969SX";
    let house_number = "Edgestreet 666";
    let date = "06/06/1666";
    let gas = 911;
    let water = 1914;
    let electricity = 1939;
    let meter = "SmartMeter";

    let chars = 0;
    let words = 0;

    let info = [
        "6969SX",
        "Edgestreet 666",
        "06/06/1666",
        "911",
        "1914",
        "1939",
        "SmartMeter",
    ];



    let description = "At " + house_number + " with the postal code " + postal_code + " at the day of " + date + " we took some matings." +
        " Gas = " + gas + " Water =" + water + " Elecricity = " + electricity + " We took those with the " + meter;

    let description1 = description;

    chars = description.split("").length;
    words = description.split(" ").length;
    let first_word = description.split(" ")[0];


    let last_word = description.split(" ")[words - 1];


    description = description + "<br><br><strong>Specs:</strong><br><br> There are " + chars + " charachters and " + words + " words. The first word is " + first_word
    + " and the last word is " + last_word ;

    let reverse = description1.split("").reverse().join("");

    console.log(reverse);

    description = description + "<br><br><strong>Bonus:</strong><br><br>" + reverse;
    let result = description;

    main.updateContent("Variabelen", result);
}

function objecten() {

    let gas = { "postalcode":"1234AB",
                "house_number":99,
                "date":"2018-01-01",
                "gas":300,
                "water":30,
                "electricity": [1001,
                                1002],
                "smart'o'meter": true
    };

    console.log(gas.gas);



    let description = " <table> <tr><th>"+ Object.keys(gas)[3] +"</th><th>"+ gas.gas +"</th></tr>" +
        "                       <tr><th>"+ Object.keys(gas)[4] +"</th><th>"+ gas.water +"</th></tr>" +
        "                       <tr><th>"+ Object.keys(gas)[5] +"</th><th>"+ gas.electricity[0] +"</th></tr>" +
        "                       <tr><th>"+ Object.keys(gas)[5] +"</th><th>"+ gas.electricity[1] +"</th></tr></table>";
    let result = description;
    main.updateContent("Objecten", result)
}

function array() {

    let objects = [];

    let gas1 = {"postalcode":"1234AB",
                "house_number":99,
                "date":"2018-01-01",
                "gas":300,
                "water":30,
                "electricity": [1001,
                                1002],
                "smart_o_meter": true
    };

    let gas2 = {"postalcode":"1234AB",
                "house_number":45,
                "date":"2018-01-01",
                "gas":1300,
                "water":130,
                "electricity": [11001,
                                110022],
                "smart_o_meter": false
    };

    objects.push(gas1, gas2);

    let part1 = "<tr><th>"+ Object.keys((objects[0]))[0]+"</th> <th>"+ Object.keys((objects[0]))[1]+"</th> <th>"+ Object.keys((objects[0]))[2]+"</th> <th>"+ Object.keys((objects[0]))[3]+"</th> <th>"+ Object.keys((objects[0]))[4]+"</th> <th>"+ Object.keys((objects[0]))[5]+"</th> <th>"+ Object.keys((objects[0]))[6]+"</th>";
    let part2 = "<tr><th>"+ objects[0].postalcode +"</th> <th>"+ objects[0].house_number +"</th> <th>"+ objects[0].date +"</th> <th>"+ objects[0].gas +"</th> <th>"+ objects[0].water +"</th> <th>"+ objects[0].electricity +"</th> <th>"+ objects[0].smart_o_meter +"</th> </tr>";
    let part3 = "<tr><th>"+ objects[1].postalcode +"</th> <th>"+ objects[1].house_number +"</th> <th>"+ objects[1].date +"</th> <th>"+ objects[1].gas +"</th> <th>"+ objects[1].water +"</th> <th>"+ objects[1].electricity +"</th> <th>"+ objects[1].smart_o_meter +"</th> </tr>";

    let description = "<table>"+ part1 + part2 + part3 +"</table>";
    let result = description;
    main.updateContent("Objecten", result)
}

function ajax_table() {
    let data = "";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            data = this.responseText;
        }
    };
    xhttp.open("GET", "http://gert-rikkers.nl/api/meterstanden", true);
    xhttp.send();

    console.log(data);


    let description = "";
    let result = description;
    main.updateContent("Objecten", result)
}





















