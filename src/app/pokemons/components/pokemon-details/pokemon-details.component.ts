import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonsService } from './../../services/pokemons/pokemons.service';
import { Pokemon } from '../../models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  editPokemon(pokemon: Pokemon): void {
    let url = ['/pokemons/edit', pokemon.id];
    this.router.navigate(url);
  }

  /*
  // API version but API doesn't work

  deletePokemon(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon).subscribe(_ => this.goBack());
  }
  */
}
