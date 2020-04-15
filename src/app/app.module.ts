import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductService} from './services/product-service';
import {ComponentsBoot} from './components-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { increment, decrement, reset } from './components/counter/counter.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [...ComponentsBoot, CounterComponent],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
