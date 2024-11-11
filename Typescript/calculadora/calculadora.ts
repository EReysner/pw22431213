//const operaciones = ["suma", "resta", "multiplicacion", "division"];
 export type Operaciones= "suma"|"resta"|"multiplicacion"|"division";
 type Resultados = number|string ;
const calculadora =(a:number,b:number,operacion:Operaciones ):number=> {
    if(operacion=="suma"){
        return a+b;
    }
    if(operacion=="resta"){
        return a-b;
    }
    if(operacion=="multiplicacion"){
        return a*b;
    }
    if(operacion=="division"){
        if (b==0){
           // return "No se puede dividir entre 0";
           throw new Error("No se puede dividir entre 0");
        }
        return a/b;
    }
    throw new Error("Operacion no permitida");
}
console.log(calculadora(1,3,"suma"));
console.log(calculadora(1,3,"resta"));
console.log(calculadora(1,3,"multiplicacion"));
console.log(calculadora(1,3,"division"));
console.log(calculadora(1,0,"division"));
//console.log(calculadora(1,0,"sumas"));