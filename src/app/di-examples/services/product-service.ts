import {Product} from './product-model';

export class ProductService {
  getProduct(): Product {
    return new Product(0, 'iPhone 7', 249.99, 'The latest iPhone, 7 inch screen');
  }
}
