

import { Pokemon, PokemonData } from "./MainClass";


//Clase de Pokémon de tipo Pelea 
export class FightingPokemon extends Pokemon {
//el constructor de la subclase no hace nada extra por sí mismo (solo recibe el objeto y lo reenvía al padre con super).
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.ataque / this.defensa) * multipliers) + 1;
  }
}


//Clase de Pokémon de tipo Veneno
export class PoisonPokemon extends Pokemon {
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.ataque - this.defensa) * multipliers) + 1;
  }
}


//Clase de Pokémon de tipo tierra 
export class GroundPokemon extends Pokemon {
  constructor(_pokemon: PokemonData) {
    super(_pokemon);
  }
  calculateImpact(multipliers: number): number {
    return Math.floor((this.ataque + this.defensa) * multipliers) + 1;
  }
}

