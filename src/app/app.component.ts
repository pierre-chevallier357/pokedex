import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './models/mock-pokemons';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'pokedex-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert('Vous avez cliqué sur ' + pokemon.name);
  }
}
