import { Component, Input, output } from '@angular/core';
import { Product } from "@model/product.model";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "@ui/components";
import { NgbRating, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";
import { ProductUtil } from "@utils/product.util";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-card',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    NgbTooltip,
    NgClass,
    NgbRating,
    FaIconComponent,
    RouterLink,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input()
  product: Product;

  protected addToCart() {
  }

  protected readonly ProductUtil = ProductUtil;
  protected readonly faCartArrowDown = faCartArrowDown;
}
