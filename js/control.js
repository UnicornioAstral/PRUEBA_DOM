/*
document.getElementById ( "btn" ).addEventListener ( "click",mostrarAlerta ());

funtion mostrarAlerta () {
    alert ( "hola!! has hecho click en el boton" );
}
document
*/

const btn = document.getElementById("btn");
const encabezado = document.getElementById("encabezado");
const principal = document.querySelector("main");
const pie = document.getElementById("pie");

btn.addEventListener("click", mostrarAlerta);  
encabezado.addEventListener("mouseover", cambiarColor);
encabezado.addEventListener("mouseout", cambiarColor);
principal.addEventListener("mouseover", cambiarColor);
principal.addEventListener("mouseout", cambiarColor);
pie.addEventListener("mouseover", cambiarColor);
pie.addEventListener("mouseout", cambiarColor);

function mostrarAlerta() {
    alert("hola!! has hecho click en el boton");
}

function cambiarColor(event) {
    if((event.type==="mouseover")&&(event.target.tagName==="HEADER")) {
        event.target.style.backgroundColor = "#C18END";
    } else if((event.type==="mouseover")&&(event.target.tagName==="MAIN")) {
        event.target.style.backgroundColor = "blue";
    } else if((event.type==="mouseover")&&(event.target.tagName==="FOOTER")) {
        event.target.style.backgroundColor = "red";
    }else{
        event.target.style.backgroundColor = "white";
    }
}

