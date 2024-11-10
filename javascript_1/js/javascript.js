
/*document.write("Hello World");
console.log("Consola desde JS");
//console.error("Error desde JS");

/*Comentarios
Multiples lineas
// Variables
//<---tipo - tipado débil
let x; 
console.log(typeof(x));
let esPW=false;
console.log(typeof(esPW));
if(esPW){
    console.log("Estamos en clase");
}else {
    console.log("No estamos en clase");
}
let numero =-2252.33;
console.log(numero);

let cadena="una cadena 'comillas'";
console.log(cadena);
let cadena2='otra cadena "al reves" ' + numero;
console.log(cadena2);
let cadena3=`otra cadena
incluso puedo tener renglones y variables ${numero}`;
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
let usuario={nombre:"Victor",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variablenula=null;
console.log(variablenula);

const PI = 3.1416;
console.log(PI);
//PI=3.1415;

let arreglo= [];
console.log(arreglo);
arreglo=[1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre:"Victor",edad:22};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

//alert("alerta en pantalla");
//let edad=prompt("Dame la edad",0);
//console.log(edad);

let variable= "valor";
const CONSTANTE ="VALOR";
function miFuncion(a=2){ //valor por defecto
    return 2*a;
}
console.log(miFuncion(6));
const funcionFlecha= (a=10) =>{
    return 2*a;
}  
console.log(funcionFlecha(7));

//Destructuring - destructurar
//objetos

const usuarios = {
    nombre:"Victor",
    apellido:"Dávila",
}
//let nombre = usuarios.nombre;
//let apellido = usuarios.apellido;
const {apellido,nombre} = usuarios;
console.log(nombre+" "+apellido);
//Otro objeto
const usuarios2={
    nombre:"Victor",
    apellido:"Dávila",
    redes:{
        sociales:{
            twx:"@victorx",
            face:"victorf"
        }
    }
}
//const face=usuarios2.redes.sociales.face
//const {face,twx}=usuarios2.redes.sociales;
//console.log(twx,face);
const {redes:{sociales:{twx}}}=usuarios2;
console.log(twx);

//arreglos
const arregloNombres=["Victor","Jesus","Fernández"];
//let nombre1=arregloNombres[0];
//let nombre3=arregloNombres[1];
const [nombre1,,nombre3]=arregloNombres;
console.log(nombre1+" "+nombre3);

//Combinaciones
//objetos
const usuarios3={
    direccion: "conocida",
    numerocasa: "123"
}
//propagacion de campos
const nuevoObjeto={...usuarios2,...usuarios3};
console.log(nuevoObjeto);

//arreglos
const arregloApellidos=["Lopez","Martinez","Gomez"];
const nuevoArreglo=[...arregloNombres,...arregloApellidos];
console.log(nuevoArreglo);
const otroNuevoArreglo= arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach, for, map, reduce <---iterar arreglos

for(let i=0; i<nuevoArreglo.length;i++){
    console.log(nuevoArreglo[i]);
}
nuevoArreglo.forEach(function(nombre){
    console.log(nombre);
});
let numeros=[1,2,3,4,5];
let suma=0;
numeros.forEach(function(numero){
    suma+=numero;
});
console.log(suma);

//map   
let precios=[20,30,40,50];
const conversion= 0.85;
let preciosNuevos=precios.map(function(precio){
    return precio*conversion;
});
console.log(preciosNuevos);

//reduce 
let sumaPrecios= precios.reduce(function(suma,precio){
    return suma+precio;
},0)
console.log(sumaPrecios);

//clases
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log(`este ${this.nombre} hace ruido`);
    }
}
class Perro extends Animal{
    habla(){
        console.log(`mi perro ${this.nombre} ladra`);
    }
}
const perro=new Perro("Firulais");
perro.hablar();*/

//Clousures
const variableFuncion = function(){
    return "Hola Mundo";    
}
console.log(variableFuncion());  

const saludo="hola";
function externa(){
    const persona = " Victor ";
    function interna(){
        const fin= "davila";
        return saludo+persona+fin;
    }
    return interna;
}
console.log(externa()());
const clousure=externa();
console.log(clousure());

//otro ejemplo
const miContador = (function(){ //clase , pero no es una clase
    let contador = 0;
    function incrementar(){
        return ++contador;
    }
    function decrementar(){
        return --contador;
    }
    function valor(){
        return contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})(); //<---- ejecutar la funcion principal
console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());

//Promesas
//paginas dinamicas <----- acceso a datos (internos, externos)
//Kb <----externas, internas----> MB o GB
let datos= [
    {
        id:1,
        materia:"PW",
        semestre: 6
    },
    {
        id:2,
        materia:"PW",
        semestre: 1
    },
    {
        id:3,
        materia:"PW",
        semestre: 2
    }
]
//datos=[];

//console.log(datos);
//funcion que simular obtener dator de un servidor remoto
const obtenerDatos = () =>{
    return new Promise((resolve,reject)=>{
        if(datos.length===0){
            reject(new Error("No hay datos"));
        }
        setTimeout(() =>{
           resolve(datos);
        },1500); //milisegundos
    })
}
//funcion async debe esperar a que termine de obtener la informacion
async function procesarDatos(){
    try{
        const misdatos= await obtenerDatos();
        console.log(misdatos);
    }catch(error){
        console.error(error.message);
    }
}
procesarDatos();
//console.log(obtenerDatos());
