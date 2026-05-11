import { Component, Input } from '@angular/core';
import { Product } from "../../model/product.model";
import { NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../../ui/components/button/button.component";

@Component({
  selector: 'app-product-card',
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input()
  product: Product;

}
