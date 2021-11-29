import { PokemonsService } from './services/pokemons/pokemons.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BorderCardDirective } from './directives/border-card/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonDetailsComponent,
    PokemonListComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule, FormsModule],
  providers: [PokemonsService],
})
export class PokemonModule {}
