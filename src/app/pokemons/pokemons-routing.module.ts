import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'edit/:id',
    component: EditPokemonComponent,
  },
  {
    path: ':id',
    component: PokemonDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
