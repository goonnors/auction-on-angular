import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterComponent } from './app-inter.component';
import {RouterModule} from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { InputPropertyBindingsComponent } from './components/input-property-bindings/input-property-bindings.component';
import { PriceQouterComponent } from './components/price-qouter/price-qouter.component';
import { OutputPropertyBindingComponent } from './components/output-property-binding/output-property-binding.component';
import { MediatorComponent } from './components/mediator/mediator.component';
import { ChildApiComponent } from './components/child-api/child-api.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProjectionComponent } from './components/projection/projection.component';



@NgModule({
  declarations: [AppInterComponent, OrderComponent, InputPropertyBindingsComponent, PriceQouterComponent, OutputPropertyBindingComponent, MediatorComponent, ChildApiComponent, ParentComponent, ProjectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AppInterComponent},
      {path: 'inter-property-bindings', component: InputPropertyBindingsComponent},
      {path: 'output-property-bindings', component: OutputPropertyBindingComponent},
      {path: 'mediator', component: MediatorComponent},
      {path: 'child-api', component: ParentComponent}
    ])
  ]
})
export default class InterModule { }
