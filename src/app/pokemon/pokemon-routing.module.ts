import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
