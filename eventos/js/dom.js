let titulo=document.getElementById("titulo");
//let titulo=document.querySelector('h1');
console.log(titulo);
let principal=document.querySelector(".principal");
console.log(principal);
let lista=document.querySelectorAll("ul.lista > li");
console.log(lista);

titulo.innerText="estructurando el DOM";
titulo.innerHTML="<em> Nuevo DOM </em>";

let foto=document.querySelector("img");
foto.setAttribute("src","img/logo_javascript2.png");
foto.classList.add("foto_cambio");

principal.style.background="#FFCC00";

let extra=document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoarticle=document.createElement("article");
nuevoarticle.innerText="Nuevo articulo";
nuevoarticle.style.color="white";
nuevoarticle.style.background="purple";
nuevoarticle.style.padding="20px";
document.body.appendChild(nuevoarticle);

//Eventos
let boton=document.querySelector("button");
//boton.addEventListener("click",()=>{
//    alert("Click en el boton");
//});
muestramensaje= (mensaje)=>{
    alert(mensaje);
}
boton.addEventListener("click",muestramensaje.bind(null,"Click en el boton"));