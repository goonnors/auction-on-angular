import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../routing/app.component';
import { HomeComponent } from '../routing/HomeComponent';
import { ProductDetailComponent } from '../routing/ProductDetailComponent';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from '../routing/app.routing';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [ AppComponent, HomeComponent, ProductDetailComponent ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
