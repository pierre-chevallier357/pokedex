import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../models/pokemon/pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon = new Pokemon();
  types: Array<string> = new Array<string>();

  constructor(private pokemonsService: PokemonsService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  areTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    console.log('Submit form !');
    let link = ['/pokemons', this.pokemon.id];
    this.router.navigate(link);
  }
}
