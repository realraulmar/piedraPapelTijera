function game(user, pc) {
  switch (true) {
    case (user == pc) :
      console.log(`tu: ${user} vs pc: ${pc}. Empate`);
      break;
    case ((user == "piedra") && (pc == "tijera")) :
      console.log(`tu: ${user} vs pc: ${pc}. Ganaste`);
      break;
    case ((user == "papel") && (pc == "piedra")) :
      console.log(`tu: ${user} vs pc: ${pc}. Ganaste`);
      break;
    case ((user == "tijera") && (pc == "papel")) :
      console.log(`tu: ${user} vs pc: ${pc}. Ganaste`);
      break;
    default :
    console.log(`tu: ${user} vs pc: ${pc}. Intentalo de nuevo`);
  }
}

let user = prompt("¿piedra, papel o tijera?").toLocaleLowerCase();
let options = ["piedra", "papel", "tijera"];
let pc = options[Math.floor(Math.random() * 3)];

game(user,pc);  