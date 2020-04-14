import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppDiExamplesComponent} from './app-di-examples.component';
import {ProductComponent} from './components/product/product.component';
import {MockProductComponent} from './components/mock-product/mock-product.component';


@NgModule({
  declarations: [ProductComponent, AppDiExamplesComponent, MockProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AppDiExamplesComponent}
    ])
  ]
})
export default class DiExamplesModule { }
