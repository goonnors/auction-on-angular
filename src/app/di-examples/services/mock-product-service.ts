import {Product} from './product-model';
import {ProductService} from './product-service';

export class MockProductService implements ProductService {
  getProduct(): Product {
    return new Product(1, 'Samsung', 125, 'anyone model');
  }
}
