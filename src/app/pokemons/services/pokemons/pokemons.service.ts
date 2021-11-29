import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';
import { POKEMONS } from 'src/assets/mock-pokemons';

@Injectable()
export class PokemonsService {
  getPokemon(id: number): Pokemon | any {
    let pokemons = this.getPokemons();

    for (let pokemon of pokemons) {
      if (id === pokemon.id) {
        return pokemon;
      }
    }
  }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }
}
