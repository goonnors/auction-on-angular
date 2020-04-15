import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterComponent } from './app-inter.component';
import {RouterModule} from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { InputPropertyBindingsComponent } from './components/input-property-bindings/input-property-bindings.component';
import { PriceQouterComponent } from './components/price-qouter/price-qouter.component';
import { OutputPropertyBindingComponent } from './components/output-property-binding/output-property-binding.component';



@NgModule({
  declarations: [AppInterComponent, OrderComponent, InputPropertyBindingsComponent, PriceQouterComponent, OutputPropertyBindingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AppInterComponent},
      {path: 'inter-property-bindings', component: InputPropertyBindingsComponent},
      {path: 'output-property-bindings', component: OutputPropertyBindingComponent}
    ])
  ]
})
export default class InterModule { }