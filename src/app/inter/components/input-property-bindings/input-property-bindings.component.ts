import { Component } from '@angular/core';

@Component({
  selector: 'app-input-property-bindings',
  templateUrl: './input-property-bindings.component.html',
  styleUrls: ['./input-property-bindings.component.scss']
})
export class InputPropertyBindingsComponent {
  stock: string;

  onInputEvent({target}): void {
    this.stock = target.value;
  }

}
