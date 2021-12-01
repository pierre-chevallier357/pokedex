import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';
import { POKEMONS } from 'src/assets/mock-pokemons';

@Injectable()
export class PokemonsService {
  getPokemon(id: number): Pokemon | any {
    let pokemons = this.getPokemons();

    for (let pokemon of pokemons) {
      if (id === pokemon.id) {
        return pokemon;
      }
    }
  }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }

  /*
  // API version but API doesn't work

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.httpClient.get<Pokemon>(url) .pipe(
      tap(_ => this.localStorage(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsURL}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deletePokemon'))
    );
  }
  */
}
