import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
  constructor(public productService2: ProductService){

  }
}
