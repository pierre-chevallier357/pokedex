import { PokemonDetailsComponent } from './pokemon/components/pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonListComponent } from './pokemon/components/pokemon-list/pokemon-list.component';

const appRoutes: Routes = [
  //{ path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then((m) => m.PokemonModule) },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: '', component: PokemonListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
