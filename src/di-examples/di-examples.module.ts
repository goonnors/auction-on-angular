import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-di-example',
  template: `
    <h1>Basic Dependency Injection Sample</h1>
    <app-di-product-page></app-di-product-page>
  `
})
class AppComponent {}

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
    ])
  ]
})
export default class DiExamplesModule { }
