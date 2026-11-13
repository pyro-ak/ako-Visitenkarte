/*window.alert ("Hallo ich bin von JavaScript genriert")*/

let schritt = 0
/*console. log(document);*/

function changeColor()  {
    let title = document.getElementById("title");
    title.style.color = "rgb(102, 10, 188)";
    title.textContent = "SURPRISE";
    title.style.fontSize = "150px";
    title.style.letterSpacing = "0.2em";

    console.log(title);
}

function create()   {
    let element = document.createElement("div");
    element.textContent = "I SAID LEAVE ME ALONE";
    element.style.fontFamily = "Gotham-Black";
    element.style.fontSize = "3rem";
    element.style.margin = "0rem";

    document.body.appendChild(element);
}


function disappear()   {
    let hidden = document.getElementById("hidden");
    hidden.style.visibility = "hidden";

    document.body.appendChild(element);
}