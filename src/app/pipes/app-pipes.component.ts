import { Component } from '@angular/core';

@Component({
  selector: 'app-app-pipes',
  templateUrl: './app-pipes.component.html',
  styleUrls: ['./app-pipes.component.scss']
})
export class AppPipesComponent {

  temp: number;
  toCelsius = true;
  targetFormat = 'Celsius';
  format = 'FtoC';

  toggleFormat() {

    this.toCelsius = !this.toCelsius;
    this.format = this.toCelsius ? 'FtoC' : 'CtoF';

    this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
  }

}
