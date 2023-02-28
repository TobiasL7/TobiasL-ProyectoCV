

/////////////////////////////////// Actualización de Fecha en Footer /////////////////////////////////////

window.addEventListener("load",()=>{
    const currentDate= new Date();
    document.getElementById("currentYear").innerText=currentDate.getFullYear();
});




 /////////////////////////////////////////////// Modos   /////////////////////////////////////////// 
const Nav = document.querySelector(".mainNav");
const Body = document.querySelector(".body-class");
const Icons = document.querySelector(".icon");

var btn = document.getElementById("dark_mode");
var btn_light = document.getElementById("light_mode");

let icon = document.getElementById("iconFilePen");
let icon1 = document.getElementById("iconFile");
let icon2 = document.getElementById("iconComments");
let icon3 = document.getElementById("iconHandshake");




function darkMode (){
    Body.classList.add("dark");
    Nav.classList.add("navDark");
    icon.classList.add("icon");
    icon1.classList.add("icon");
    icon2.classList.add("icon");
    icon3.classList.add("icon");
}

function lightMode(){
    Body.classList.remove("dark");
    Nav.classList.remove("navDark");
    icon.classList.remove("icon");
    icon1.classList.remove("icon");
    icon2.classList.remove("icon");
    icon3.classList.remove("icon");
}



btn.addEventListener("click",darkMode);
btn_light.addEventListener("click",lightMode);


/////////////////////////////////// Funcionalidades en Contactos.html //////////////////////////////////////////
const btnAgregarContacto= document.getElementById("Agregar_contacto");
const btnGuardarContacto= document.getElementById("Guardar_contacto");
const modal= document.getElementById("modal");
const alertaContactoExitoso= document.getElementById("ContactoExitoso");
let btncerrarAlerta= document.getElementById("cerrarAlerta");


btnAgregarContacto.addEventListener("click", ()=>
{
    modal.showModal();
})


const form = document.getElementById("formulario");

//Valida los campos del formulario, al estar completos, lanza mensaje de alerta exitoso.
form.addEventListener("submit", e=>{
    e.preventDefault();
    btnGuardarContacto.addEventListener("click",()=>{
        alertaContactoExitoso.showModal();
        modal.close();
    });
});


btncerrarAlerta.addEventListener("click",()=>{
    alertaContactoExitoso.close();
});

