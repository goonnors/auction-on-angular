import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <h1>Hello {{name}}!</h1>
        <label>Log directive: <input type="text" log-directive></label>
        <p appHighlight>Highlight me!</p>
    `
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'Angular 2 right way';
    }
}