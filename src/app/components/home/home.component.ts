import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/product-service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
      .pipe(debounceTime(100))
      .subscribe(
        value => {
          console.log(value);
          return this.filterCriteria = value;
        },
        error => {
          return console.log(error);
        }
      );
  }

  ngOnInit(): void {
  }

}
