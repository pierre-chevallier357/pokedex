import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { POKEMONS } from 'src/assets/mock-pokemons';
import { Pokemon } from '../../models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    let pokemonUrl = ['/pokemons', pokemon.id];
    this.router.navigate(pokemonUrl);
  }
}
