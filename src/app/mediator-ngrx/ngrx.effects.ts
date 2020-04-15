import {Observable, of} from 'rxjs';
import {switchMap, delay, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SEARCH, SearchAction, SearchSuccessAction} from './ngrx.actions';

@Injectable()
export class ProductService {
  static counter = 0;

  generate(searchQuery: string): Observable<string[]> {
    const generator = () => `Product ${searchQuery}${ProductService.counter++}`;
    const results = Array.from({length: 5}, generator);
    return of(results).pipe(delay(500));
  }
}

@Injectable()
export class SearchEffects {
  @Effect()
  search$ = this.actions$.pipe(
    ofType(SEARCH),
    map((action: SearchAction) => action.payload),
    switchMap(({ searchQuery }) => this.generator.generate(searchQuery)),
    map(searchResults => new SearchSuccessAction({ searchResults }))
  );

  constructor(private actions$: Actions, private generator: ProductService) {}
}
