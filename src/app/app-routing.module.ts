import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'di-examples', loadChildren: './di-examples/di-examples.module'},
  {path: 'observables', loadChildren: './observables/observables.module'},
  {path: 'pipes', loadChildren: './pipes/pipes.module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
