import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogDirective } from './log.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, LogDirective, HighlightDirective ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}