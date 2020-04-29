import { COVID_URLS as url, REQUEST_DATA as data } from "./constants.js";

const qSelect = function (q) {
    return document.querySelector(q);
};

const jsonButton = qSelect("#generate");
const display = qSelect("#displayContainer");
const displayList = qSelect("#displayList");

const collection = [
    "Click Me",
    "Stats Please",
    "Next",
    "Continue",
    "Keep going"
];

const generateJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
            changeButton();
        }
    };
    xhr.open("GET", url.STATES);
    xhr.send();
    console.log("CONSTANTS", url);
};

// Used initially for the full JSON object
// const formatJson = resJson => {
//     resJson = JSON.stringify(resJson);
//     let counter = 0;
//     console.log("Here's what it's rendering", JSON.parse(resJson));
//     return resJson
//         .split("")
//         .map(char => {
//             switch (char) {
//                 case ",":
//                     return `,\n${" ".repeat(counter * 2)}`;
//                 case "{":
//                     counter += 1;
//                     return `{\n${" ".repeat(counter * 2)}`;
//                 case "}":
//                     counter -= 1;
//                     return `\n${" ".repeat(counter * 2)}}`;
//                 default:
//                     return char;
//             }
//         })
//         .join("");
// };

function calcMortRate(x, y) {
    return `${((x)/(y * .01)).toFixed(2)}%`;
};

const renderResponse = jsonResponse => {
    jsonResponse.map(obj => {

        const obS = obj.state;
        const obC = obj.cases;
        const obD = obj.deaths;

        let mdcListItem = document.createElement("li");
        let mdcListText = document.createElement("span");
        mdcListItem.setAttribute("class", "mdc-list-item");
        mdcListText.setAttribute("class", "mdc-list-item__text");
        mdcListText.innerHTML = `
        <b style="font-size: 20px">${obS}</b><span> (Total Cases: ${obC}) / (Total Deaths: ${obD}) --> Mortality Rate: ${calcMortRate(obD, obC)}</span>
        `;
        displayList.append(mdcListItem);
        mdcListItem.append(mdcListText);
    });
    //   display.innerHTML = `<pre>${formatJson(jsonResponse)}</pre>`;
};

// ToDo: Update the DOM tree. Currently stacks data returned from the calls
// One possibility is using `removeChild(this)` with the parent node reference then appending the child with updated data...data.or just use Angular...
const changeButton = () => {
    const newText = Math.floor(Math.random() * 5);
    jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener("click", generateJson);

// Run local server with python avoid cors issue
// ppy3 -m http.server --directory ~/demos/js_request_call 8001
