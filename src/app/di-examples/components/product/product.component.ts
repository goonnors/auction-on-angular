import { Component, OnInit } from '@angular/core';
import {Product} from '../../services/product-model';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'app-di-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }

}
