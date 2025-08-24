"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(_pokemon) {
        this.nombre = _pokemon.nombre || 'unknown';
        this.poder = _pokemon.poder || 1;
        this.ataque = _pokemon.ataque || 1;
        this.defensa = _pokemon.defensa || 1;
    }
    toString() {
        return `
        nombre:${this.nombre} 
        power: ${this.poder};
        attack: ${this.ataque};
        defense: ${this.defensa};`;
    }
    calculateMultiplier() {
        return (1 / 2) * this.poder + 1;
    }
    showDamage(damage) {
        console.log('El daño del pokemon es:', damage);
    }
    calculateDamage() {
        const multipliers = this.calculateMultiplier(); // PASO 1;
        const damage = this.calculateImpact(multipliers); //PASO 2;
        this.showDamage(damage); //PASO 3;
    }
}
exports.Pokemon = Pokemon;
