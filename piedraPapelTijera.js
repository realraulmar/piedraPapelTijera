let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function game(user, pc) {
  if (user != pc) {
    if (
      (user == piedra && pc == tijera) ||
      (user == papel && pc == piedra) ||
      (user == tijera && pc == tijera)
    ) {
      console.log(`Ganaste con ${user}`);
    } else {
      console.log("Ha ganado el ordenador con " + pc);
    }

  } else {
    console.log("Empate");
  }
}

let user = prompt("¿piedra, papel o tijera?");

pc = Math.floor(Math.random() * 3);

if (pc == 1) {
  pc = piedra;
} else if (pc == 2) {
  pc = papel;
} else {
  pc = tijera;
}

game(user,pc);