import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductService} from './services/product-service';
import {ComponentsBoot} from './components-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  declarations: [...ComponentsBoot],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
