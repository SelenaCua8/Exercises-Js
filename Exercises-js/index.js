/*let alto = window.screen.availHeight; //da el alto de la pantalla
let ancho = window.screen.availWidth;

comprar = confirm("El alto es: " + alto + " y el ancho es de: " + ancho);

if(comprar){
    alert("Compra realizada exitosamente")
}else
{
    alert("Compra cancelada")
}*/

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocolo = window.location.protocol;

let html = "Protocolo: " + protocolo + "<br>";
html += "Pathmame: " + pathname + "<br>";
html += "Hostname: " + hostname + "<br>";
html += "URL completa: " + href + "<br>";

document.write(html);
