import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {CounterComponent} from './components/counter/counter.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'di-examples', loadChildren: './di-examples/di-examples.module'},
  {path: 'observables', loadChildren: './observables/observables.module'},
  {path: 'pipes', loadChildren: './pipes/pipes.module'},
  {path: 'inter', loadChildren: './inter/inter.module'},
  {path: 'mediator-ngrx', loadChildren: './mediator-ngrx/mediator-ngrx.module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
