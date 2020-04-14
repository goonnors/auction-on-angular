import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductService} from './services/product-service';
import {ComponentsBoot} from './components-boot';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [...ComponentsBoot],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
