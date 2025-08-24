import { FightingPokemon, PoisonPokemon, GroundPokemon } from "./Pokemons";

const passimian = new FightingPokemon({
  nombre: 'Passimian',
  ataque: 150,
  poder: 100,
  defensa: 50
});
console.log(passimian.toString());
passimian.calculateDamage();

const poipole = new PoisonPokemon({
  nombre: 'Poipole',
  ataque: 250,
  poder: 200,
  defensa: 60
});
console.log(poipole.toString());
poipole.calculateDamage();

const mudsdale = new GroundPokemon({
  nombre: 'Mudsdale',
  ataque: 100,
  poder: 100,
  defensa: 300
});
console.log(mudsdale.toString());
mudsdale.calculateDamage();