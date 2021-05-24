"use strict";
var form = document.getElementById("forma");
var campos = ["nombre", "boleta", "materia", "grupo", "fecha"];
var salida = document.getElementById("otraSalida");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  unirtodo();
});
function unirtodo() {
  salida.innerHTML = `<p> Nombre: ${form[campos[0]].value}, Boleta: ${
    form[campos[1]].value
  }, Materia: ${form[campos[2]].value}, Grupo: ${form[campos[3]].value}, Fecha: ${form[campos[4]].value}  `;
}
