import { Component, Input } from '@angular/core';
import { AvailabilityStatus, Product } from "../../model/product.model";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbRating, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent, IconDefinition } from "@fortawesome/angular-fontawesome";
import { faCartArrowDown, faCircle, faCircleHalfStroke, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-card',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    NgbTooltip,
    NgClass,
    NgbRating,
    FaIconComponent,
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

  protected getClassForAvailability(availabilityStatus: AvailabilityStatus): string {
    return availabilityStatus.toLocaleLowerCase().replace(' ', '_');
  }

  protected readonly faCartArrowDown = faCartArrowDown;
  protected readonly faCircle = faCircle;
  protected readonly faCircleHalfStroke = faCircleHalfStroke;
  protected readonly faCircleXmark = faCircleXmark;

  protected getIconForAvailability(availabilityStatus: AvailabilityStatus): IconDefinition {
    switch (availabilityStatus) {
      case "In Stock":
        return this.faCircle;
      case "Low Stock":
        return this.faCircleHalfStroke
      case "Out of Stock":
        return this.faCircleXmark;
    }
  }
}
