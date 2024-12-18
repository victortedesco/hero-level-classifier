import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRankByXP(xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro";
    case xp >= 1001 && xp <= 2000:
      return "Bronze";
    case xp >= 2001 && xp <= 5000:
      return "Prata";
    case xp >= 5001 && xp <= 7000:
      return "Ouro";
    case xp >= 7001 && xp <= 8000:
      return "Platina";
    case xp >= 8001 && xp <= 9000:
      return "Ascendente";
    case xp >= 9001 && xp <= 10000:
      return "Imortal";
    case xp >= 10001:
      return "Radiante";
    default:
      return "XP inválido";
  }
}

let heroName;
let heroXP;

rl.question("Type the hero name: ", (input) => {
  heroName = input;

  rl.question("Type the hero XP: ", (input) => {
    heroXP = parseInt(input);

    console.log(
      `O herói de nome ${heroName} está no nível ${getRankByXP(heroXP)}`
    );

    rl.close();
  });
});
