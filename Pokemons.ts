

import { Pokemon, PokemonData } from "./MainClass";

export class FightingPokemon extends Pokemon {
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.attack / this.defense) * multipliers) + 1;
  }
}

export class PoisonPokemon extends Pokemon {
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.attack - this.defense) * multipliers) + 1;
  }
}

export class GroundPokemon extends Pokemon {
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.attack + this.defense) * multipliers) + 1;
  }
}

