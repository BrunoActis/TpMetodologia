
export interface PokemonData {
  nombre: string;
  poder: number;
  ataque: number;
  defensa: number;
}

export abstract class Pokemon {
    
    nombre: string;
    poder: number;
    ataque: number;
    defensa: number;

  constructor(_pokemon: PokemonData) {
    this.nombre = _pokemon.nombre || 'unknown';
    this.poder = _pokemon.poder || 1;
    this.ataque = _pokemon.ataque || 1;
    this.defensa = _pokemon.defensa || 1;
  }
    public toString() { 
        return `
        nombre:${this.nombre} 
        power: ${this.poder};
        attack: ${this.ataque};
        defense: ${this.defensa};`;
    }

    private calculateMultiplier() { //PASO 1 -  comun para todos los pokemones y no se puede sobreescribir
        return (1 / 2) * this.poder + 1;
    }

    private showDamage(damage:number) {// PASO 3 - Comun para todos los pokemones
        console.log('El daño del pokemon es:', damage);
    }

    //Contrato o plantilla que deben seguir las clases hijas
    //Todas las clases hijas que hereden de Pokemon están obligadas a implementar este método.
    //La clase padre Pokemon no sabe cómo calcular el impacto, pero sí sabe que cada Pokémon debería
    //tener un método llamado calculateImpact que reciba un número y devuelva otro número.
    protected abstract calculateImpact(multipliers: number): number;


    public calculateDamage() {
        const multipliers = this.calculateMultiplier(); // PASO 1;
        const damage = this.calculateImpact(multipliers); //PASO 2;
        this.showDamage(damage); //PASO 3;
    }
}

