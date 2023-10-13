let hpPersonaje = 5;
let hpEnemigo = 5;

let inputNombre = document.getElementById('nombreingresado');
let btnRegistrar = document.getElementById('registro');
let inputNombremostrado = document.getElementById('nombremostrado');

btnRegistrar.addEventListener("click", function(){
    let nombre = inputNombre.value;
    inputNombremostrado.textContent = nombre;

    localStorage.setItem('nombre-usuario', nombre);
    
});

let nombreGuardado = localStorage.getItem('nombre-usuario');

if (nombreGuardado){
    inputNombremostrado.textContent = nombreGuardado;
}

// const usuario = document.getElementById('nombremostrado');
// localStorage.setItem ("nombre-usuario", usuario);


let objetivo = document.querySelector("#objetivo");
let hpjugador = document.querySelector("#hp-jugador");
let hpmob = document.querySelector("#hp-mob");
let resultados = document.querySelector("#resultados");
let mensajedaño = document.querySelector("#daño");
let armaelegidaj = document.querySelector("#eleccion-jugador");
let armaelegidam = document.querySelector("#eleccion-mob");
let armaelegida = document.querySelector("#arma-elegida")




let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
        boton.addEventListener("click",iniciarPelea);
});

function iniciarPelea(e){

    let eleccionMob = Math.floor(Math.random()*3);
    let eleccionjugador = e.currentTarget.id;
   
   

    if (eleccionMob === 0){
        eleccionMob = "espada";
    } else if (eleccionMob === 1){
        eleccionMob = "daga";
    }
    else if 
        (eleccionMob === 2) {
        eleccionMob = "arco"; 
    }
    console.log(eleccionjugador);
    console.log(eleccionMob);
   
    if(
        (eleccionjugador === "espada" && eleccionMob === "daga") ||
        (eleccionjugador === "daga" && eleccionMob === "arco") ||
        (eleccionjugador === "arco" && eleccionMob === "espada")
    ){
        ganaPersona();
    } else if(
        (eleccionMob === "espada" && eleccionjugador === "daga") ||
        (eleccionMob === "daga" && eleccionjugador === "arco") ||
        (eleccionMob === "arco" && eleccionjugador === "espada")
    ){
        ganaMob();
    } else {
        empate();
    }

    armaelegidaj.innerText = eleccionjugador;
    armaelegidam.innerText = eleccionMob;

    if (hpPersonaje === 0 || hpEnemigo === 0){
        if (hpPersonaje === 0){
            objetivo.innerText = "Fuiste derrotado GG 👻"
        }
        if (hpEnemigo === 0){
            objetivo.innerText = "Derrotaste a tu enemigo 🐱‍👤"
        }
    }
}

function ganaPersona(){
    hpPersonaje--;
    hpjugador.innerText = hpPersonaje;
    mensajedaño.innerText = "hiciste 1 punto de daño!🏌️‍♂️"
}

function ganaMob(){
    hpEnemigo--;
    hpmob.innerText = hpEnemigo;
    mensajedaño.innerText = "recibiste 1 punto de daño💀"
}

function empate(){
    mensajedaño.innerText = "hay empate, nadie recibio daño"
}




    