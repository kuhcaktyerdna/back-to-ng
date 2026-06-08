import { AvailabilityStatus, Product } from "@model/product.model";
import { IconDefinition } from "@fortawesome/angular-fontawesome";
import { faCircle, faCircleHalfStroke, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export abstract class ProductUtil {

  static getClassForAvailability(availabilityStatus: AvailabilityStatus): string {
    return availabilityStatus.toLocaleLowerCase().replaceAll(' ', '_');
  }

  static getIconForAvailability(availabilityStatus: AvailabilityStatus): IconDefinition {
    switch (availabilityStatus) {
      case "In Stock":
        return faCircle;
      case "Low Stock":
        return faCircleHalfStroke
      case "Out of Stock":
        return faCircleXmark;
    }
  }

  static getProductPrice(product: Product): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(product.price);
  }

}
