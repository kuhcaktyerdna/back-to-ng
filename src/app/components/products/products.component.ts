import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../core/product-card/product-card.component";
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-products',
    imports: [
        ProductCardComponent
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  protected readonly productsService: ProductService = inject(ProductService);

}
