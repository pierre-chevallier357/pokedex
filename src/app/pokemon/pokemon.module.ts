import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderCardDirective } from './directives/border-card/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [BorderCardDirective, PokemonTypeColorPipe, PokemonDetailsComponent, PokemonListComponent],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
