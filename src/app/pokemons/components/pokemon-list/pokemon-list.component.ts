import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonsService } from './../../services/pokemons/pokemons.service';
import { Pokemon } from '../../models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    let pokemonUrl = ['/pokemons', pokemon.id];
    this.router.navigate(pokemonUrl);
  }
}
