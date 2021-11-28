import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon/pokemon';
import { POKEMONS } from 'src/assets/mock-pokemons';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let id = Number(this.route.snapshot.paramMap.get('id'));
    for (let pokemon of this.pokemons) {
      if (pokemon.id == id) {
        this.pokemon = pokemon;
      }
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
