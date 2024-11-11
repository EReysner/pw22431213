"use strict";
let numeros;
numeros = 101;
console.log(numeros);
let arreglosnumeros;
arreglosnumeros = [1, 2, 3, 4, 5];
let arreglostrings;
arreglostrings = ["cadena", "strings", "otracadena"];
let decisiones;
let arreglosbooleanos;
arreglosbooleanos = [true, false, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? "-" : d));
}
info(1, "hola", true, 10);
var TiposUsuario;
(function (TiposUsuario) {
    TiposUsuario[TiposUsuario["Administrador"] = 0] = "Administrador";
    TiposUsuario[TiposUsuario["Moderador"] = 1] = "Moderador";
    TiposUsuario[TiposUsuario["Invitado"] = 2] = "Invitado";
})(TiposUsuario || (TiposUsuario = {}));
function usuarios(usuario) {
    console.log("nombre: " + usuario.nombre + " tipo: " + usuario.tipo + " edad: " + usuario.edad + " ip: " + usuario.ip + " ipsecreta: " + usuario.ipsecreta);
}
console.log(usuarios({ nombre: "juan", tipo: TiposUsuario.Invitado, edad: true, ip: "192.168.4.1", ipsecreta: "algo" }));
let tiempo = 76000000;
let animal = "dinosaurio";
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 42;
let animales = ["perro", "gato", "pez"];
let numeros1 = [1, 2, 3, 4, 5];
let atributos = [];
let numeros2 = [];
let tupla = [1, "cadena"];
tupla.push(12);
let tupla2 = [1, ["cadena", "cadena2"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["Extragrande"] = "xl";
})(Talla || (Talla = {}));
const tallaGrande = Talla.Grande;
console.log("talla: " + tallaGrande);
const estado = 2;
