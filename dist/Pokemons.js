"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroundPokemon = exports.PoisonPokemon = exports.FightingPokemon = void 0;
const MainClass_1 = require("./MainClass");
class FightingPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.attack / this.defense) * multipliers) + 1;
    }
}
exports.FightingPokemon = FightingPokemon;
class PoisonPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.attack - this.defense) * multipliers) + 1;
    }
}
exports.PoisonPokemon = PoisonPokemon;
class GroundPokemon extends MainClass_1.Pokemon {
    constructor(_pokemon) {
        super(_pokemon);
    }
    calculateImpact(multipliers) {
        return Math.floor((this.attack + this.defense) * multipliers) + 1;
    }
}
exports.GroundPokemon = GroundPokemon;
