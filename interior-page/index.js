/*Archivo de funciones para cerrar y abrir el menu despegable, se añaden los console.log
ya que estaba en proceso de depuracion por error de no ejecutar los eventos(quitar los comentarios para depurar)*/

//console.log("Script cargado correctamente.");

const nav = document.querySelector(".nav-bar");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

/* console.log("Elemento nav:", nav);
console.log("Elemento open:", open);
console.log("Elemento close:", close); */

open.addEventListener("click", () => {
    nav.classList.add("visible");
    //console.log("Menú abierto.");
});
close.addEventListener("click", () => {
    nav.classList.remove("visible");
    //console.log("Menú cerrado.");
});