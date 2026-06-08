import { Component, effect, inject, input, InputSignal, Signal } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { NgbCarousel, NgbSlide, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Product } from "../../model/product.model";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ProductUtil } from "../../utils/product.util";
import {
  ButtonComponent,
  InputComponent,
  SpinnerComponent
} from "../../ui/components";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-single-product',
  imports: [
    NgbCarousel,
    NgbSlide,
    NgOptimizedImage,
    FaIconComponent,
    NgClass,
    ButtonComponent,
    NgbTooltip,
    InputComponent,
    SpinnerComponent
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export default class SingleProductComponent {

  protected readonly PRODUCT_IMAGE_SIZE_PX = 600;

  protected readonly productsService: ProductService = inject(ProductService);
  protected readonly ProductUtil: typeof ProductUtil = ProductUtil;
  protected readonly faCartArrowDown = faCartArrowDown;

  protected readonly product: Signal<Product> = this.productsService.singleProduct.value;
  protected readonly productId: InputSignal<number> = input<number>();

  constructor() {
    effect(() => {
      this.productsService.productId.set(this.productId());
    });
  }

  protected canBuy(product: Product): () => boolean {
    return () => product.stock === 0;
  }

}
