import { Component, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../../../service/product.service";

@Component({
  selector: 'app-home',
  imports: [

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private http: HttpClient = inject(HttpClient);
  productsService: ProductService = inject(ProductService);

  products = this.http.get('https://fakestoreapi.com/products');



}
