"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemons_1 = require("./Pokemons");
const passimian = new Pokemons_1.FightingPokemon({
    nombre: 'Passimian',
    ataque: 150,
    poder: 100,
    defensa: 50
});
console.log(passimian.toString());
passimian.calculateDamage();
const poipole = new Pokemons_1.PoisonPokemon({
    nombre: 'Poipole',
    ataque: 250,
    poder: 200,
    defensa: 60
});
console.log(poipole.toString());
poipole.calculateDamage();
const mudsdale = new Pokemons_1.GroundPokemon({
    nombre: 'Mudsdale',
    ataque: 100,
    poder: 100,
    defensa: 300
});
console.log(mudsdale.toString());
mudsdale.calculateDamage();
