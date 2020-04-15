import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.scss']
})
export class FormcontrolComponent implements OnInit {
  searchInput: FormControl = new FormControl('');

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  ngOnInit(): void {
  }

  getStockQuoteFromServer(stock: string) {
    console.log(`The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`);
  }

}
