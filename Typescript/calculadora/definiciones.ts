let numeros: number;
numeros = 101;
console.log(numeros);
let arreglosnumeros: number[];
arreglosnumeros = [1, 2, 3, 4, 5];
let arreglostrings: string[];
arreglostrings = ["cadena", "strings", "otracadena"];
let decisiones: true;
let arreglosbooleanos: boolean[];   
arreglosbooleanos = [true, false, true];
function info(a:number,b:string,c:boolean,d?:number):void{ //? parametro opcional
    console.log(a+" "+b+" "+c+" "+(d==undefined ? "-":d));
}
info(1,"hola",true,10);
enum TiposUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario ={
    nombre: string, tipo: TiposUsuario, edad: boolean, readonly ipsecreta: string
}
type UsuarioRedes=Usuario & {//extendiendo el tipo
    ip: string
}
function usuarios(usuario:UsuarioRedes):void{
    console.log("nombre: "+usuario.nombre+" tipo: "+usuario.tipo+" edad: "+usuario.edad+" ip: "+usuario.ip+" ipsecreta: "+usuario.ipsecreta);
}
console.log(usuarios({nombre:"juan",tipo:TiposUsuario.Invitado,edad:true,ip:"192.168.4.1",ipsecreta:"algo"}));

//tipos que solo existen en Typescript

let tiempo:number=76_000_000;
let animal:string="dinosaurio";
let extinto:boolean=true;
//tipo any
let mivariable;
mivariable="cadena";
mivariable=42;

//Arreglos
let animales:string[]=["perro","gato","pez"];
let numeros1:number[]=[1,2,3,4,5];
let atributos:boolean[]=[];
let numeros2: Array<number>=[];

//animales.map(x=>x.)

//tuplas
let tupla:[number,string]=[1,"cadena"]
tupla.push(12)//no marca error
let tupla2:[number,string[]]=[1,["cadena","cadena2"]]

//Enums
const chica ="s"
const mediana ="m"
const grande ="l"
const extragrande ="xl"

//enum Talla{Chica=10,Mediana,Grande,Extragrande}
enum Talla{Chica="s",Mediana="m",Grande="l",Extragrande="xl"}
const tallaGrande=Talla.Grande;
console.log("talla: "+tallaGrande);

//ponemos const para oculatr la enum del JS
const enum EstadoCargaPagina{Iniciar,Cargando,Exito,Error}
//solamente sale la asignación del valor explicito en JS
const estado=EstadoCargaPagina.Exito;

//Objetos
const objeto:{
    readonly id:number,
    nombre:string
}={id:1,nombre:""}
//objeto.id=50
objeto.nombre="PW"

//? opcional
const objeto2:{id:number,nombre?:string}={id:1}
objeto2.nombre="PW"

const objeto3:{id:number,nombre:string,talla:Talla}={id:1,nombre:"PW",talla:Talla.Mediana}

type Persona={
    id:number,
    nombre:string,
    talla:Talla
}

const objeto4:Persona={id:1,nombre:"PW",talla:Talla.Extragrande}

type Direccion={
    numero:number,
    calle:string,
    pais:string
}
type Persona2={
    id:number,
    nombre:string,
    talla:Talla,
    domicilio:Direccion
}

const objeto5:Persona2={id:1,nombre:"PW",talla:Talla.Chica,domicilio:{numero:123,calle:"conocida",pais:"MX"}}

//Tipado de funciones
function func(){}

const fn1=(y:number):number=>{
    let x=2;
    if(x>5){
        return y;
    }
    return 4;
}

const fn2:()=>number=()=>{
    let x=2;
    if(x>5){
        return 2;
    }
    return 4;
}

const fn3:(a:number)=>string=(edad:number)=>{
    if(edad>=18){
        return "puedes pasar";
    }
    return "no puedes pasar";
}

//Never: Se usa cuando necesitemos que la función lance un error
function ErrorUsuario1():never{
    throw new Error("Error de usuario");
}
function ErrorUsuario2():never{
    throw new Error("Error de usuario");
}
