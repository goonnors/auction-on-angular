import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./HomeComponent";
import {ProductDetailComponent} from './ProductDetailComponent';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
