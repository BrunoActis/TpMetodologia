import { FightingPokemon, PoisonPokemon, GroundPokemon } from "./Pokemons";

const passimian = new FightingPokemon({
  name: 'Passimian',
  attack: 150,
  power: 100,
  defense: 50
});
console.log(passimian.toString());
passimian.calculateDamage();

const poipole = new PoisonPokemon({
  name: 'Poipole',
  attack: 250,
  power: 200,
  defense: 60
});
console.log(poipole.toString());
poipole.calculateDamage();

const mudsdale = new GroundPokemon({
  name: 'Mudsdale',
  attack: 100,
  power: 100,
  defense: 300
});
console.log(mudsdale.toString());
mudsdale.calculateDamage();