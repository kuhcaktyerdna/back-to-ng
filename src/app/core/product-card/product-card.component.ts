import { Component, Input } from '@angular/core';
import { Product } from "../../model/product.model";
import { NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-card',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    NgbTooltip,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input()
  product: Product;

  getProductPrice(product: Product): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(product.price);
  }

  protected addToCart() {
  }
}
