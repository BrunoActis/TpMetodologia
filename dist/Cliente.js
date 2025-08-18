"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemons_1 = require("./Pokemons");
const passimian = new Pokemons_1.FightingPokemon({
    name: 'Passimian',
    attack: 150,
    power: 100,
    defense: 50
});
console.log(passimian.toString());
passimian.calculateDamage();
const poipole = new Pokemons_1.PoisonPokemon({
    name: 'Poipole',
    attack: 250,
    power: 200,
    defense: 60
});
console.log(poipole.toString());
poipole.calculateDamage();
const mudsdale = new Pokemons_1.GroundPokemon({
    name: 'Mudsdale',
    attack: 100,
    power: 100,
    defense: 300
});
console.log(mudsdale.toString());
mudsdale.calculateDamage();
