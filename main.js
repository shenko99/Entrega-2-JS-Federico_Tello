// //objetos


// const warrior ={
//     vida: 200,
//     daño: 50,
//     arma : "Hacha",
// }

// const archer ={
//     vida:100,
//     daño:70,
//     arma: "arco",
// }

// const wizzard ={
//     vida:50,
//     daño:100,
//     arma: "baston",
// }

// function heroe(vida,daño,arma){
//     this.vida = vida;
//     this.daño = daño;
//     this.arma = arma;

// }

// const boss ={
//     vida:300,
//     daño: 25
// }


// const warrior = new heroe(200,50,"hacha");
// const archer = new heroe(100,70,"arco");
// const wizzard = new heroe(50,120,"baston");

const clases = [
  {job: "Guerrero", arma:"espada"},
  {job: "Ladron", arma:"daga"},
  {job: "Arquero", arma:"arco"},
  {job: "Mago", arma:"baston"}
];

let claseElegida = prompt("seleciona la clase que quieras usar, Guerrero, Ladron, Arquero o Mago");

console.log( clases.find((clase) => clase.job === claseElegida) );

const jugador = {
    nombre: prompt("Elige un nombre para tu personaje:"),
    hp: 100,
    atk: 15,
  }
  
  const mob = {
    nombre: "no muerto",
    hp: 60,
    atk: 60,
  }
  
  
  function atacar(ataca, defiende) {
    const daño = Math.floor(Math.random() * ataca.atk) + 1;
    defiende.hp -= daño;
    return daño;
  }
  
 
  function curarse() {
    const curacion = Math.floor(Math.random() * 20) + 1;
    jugador.hp += curacion;
    return curacion;
  }
  
  

  const mapas = ["Bosque", "Desierto", "Castillo", "Cueva"]

  mapas.forEach((mapa) => {
    console.log("mapas disponibles: " + mapa);
  }
  );

  while (jugador.hp > 0 && mob.hp > 0) {
    const accion = prompt("¿Que vas a hacer " + jugador.nombre + " ?" + " Atacar o Curarte, Escribe 1 para atacar o 2 para curarte con un estus: ");
  
    if (accion === "1") {
      const dañoJugador = atacar(jugador, mob);
      const dañoMob = atacar(mob, jugador);
  
      console.log(jugador.nombre + " ataca a "+ mob.nombre + " por " + dañoJugador + "puntos de daño.");
      console.log(mob.nombre + " ataca a " + jugador.nombre + " por "+ dañoMob +" puntos de daño.");
     

    } else if (accion === "2") {
      const curacion = curarse();
      console.log(jugador.nombre + " toma un frasco de estus y se cura " + curacion+ " puntos de vida.");
      const dañoMob = atacar(mob, jugador);
      console.log(mob.nombre + " ataca a " + jugador.nombre + "por "+ dañoMob + " puntos.");
     

    } else {
      console.log("No puedes huir, tienes que tomar una desicion, escribe 1 para luchar o 2 para curarte");
      
    }
  
    console.log(jugador.nombre + " tiene " + jugador.hp+" HP");
    console.log(mob.nombre + " tiene " + mob.hp+" HP");
  }
  


 
  if (jugador.hp <= 0) {
    console.log(jugador.nombre + " YOU DIE, GIT GUD");
  } else {
    console.log(mob.nombre + " ha muerto. sigues vivo...por ahora");
  }

const loot = [ "CLAYMORE", "ESCUDO DEL TOPO", "ANILLO DEL SABIO", "ARMADURA DE CABALLERO GRIS", "UN PAR DE FLECHAS" ];

function lootrandom(){
    const itemrandom = Math.floor(Math.random() * loot.length);
    return loot[itemrandom];
}

const lootitem = lootrandom();

function notificaciondeitem(){
    if (jugador.hp >=1){
    alert("Econtraste en el cadaver del no muerto " + lootitem);
}        
}

notificaciondeitem();