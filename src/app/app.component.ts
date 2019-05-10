import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auction-angular';
  notifications = 0;
  showSpinner = false;
  opened = false;
  selectedValue: string;
  options: string[] = ['angular', 'react', 'vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue' }
  ];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  loadDate() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  log(state) {
    console.log(state);
  }

  logChange(index) {
    console.log(index);
  }
}
