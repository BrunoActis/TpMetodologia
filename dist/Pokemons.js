"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroundPokemon = exports.PoisonPokemon = exports.FightingPokemon = void 0;
const MainClass_1 = require("./MainClass");
//Clase de Pokémon de tipo Pelea 
class FightingPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.ataque / this.defensa) * multipliers) + 1;
    }
}
exports.FightingPokemon = FightingPokemon;
//Clase de Pokémon de tipo Veneno
class PoisonPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.ataque - this.defensa) * multipliers) + 1;
    }
}
exports.PoisonPokemon = PoisonPokemon;
//Clase de Pokémon de tipo tierra 
class GroundPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.ataque + this.defensa) * multipliers) + 1;
    }
}
exports.GroundPokemon = GroundPokemon;
