import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbayComponent } from './components/ebay/ebay.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [EbayComponent, AmazonComponent, SearchComponent, AppComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'ebay', component: EbayComponent },
      { path: 'amazon', component: AmazonComponent },
    ]),
  ]
})
export default class MediatorNgrxModule { }
