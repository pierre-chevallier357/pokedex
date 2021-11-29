import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
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
