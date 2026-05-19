import { Component, inject, Signal } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { NgbCarousel, NgbSlide, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Product } from "../../model/product.model";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ProductUtil } from "../../utils/product.util";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { InputComponent } from "../../ui/components/input/input.component";
import { SpinnerComponent } from "../../ui/components/spinner/spinner.component";

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
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  protected readonly product: Signal<Product> = this.productsService.singleProduct.value;

  private readonly productId: Signal<number> = toSignal(this.activatedRoute.params.pipe(
    map(pathParams => pathParams['productId'] as number ?? null)
  ));

  constructor() {
    this.productsService.productId.set(this.productId());
  }


  protected readonly ProductService = ProductService;
  protected readonly ProductUtil = ProductUtil;
  protected readonly faCartArrowDown = faCartArrowDown;

  protected canBuy(product: Product): () => boolean {
    return () => product.stock === 0;
  }

}
