import { Component, computed, effect, inject, OnDestroy, Signal } from '@angular/core';
import { ProductCardComponent } from "../../core/product-card/product-card.component";
import { ProductService } from "../../service/product.service";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { DropdownComponent } from "../../ui/components/dropdown/dropdown.component";
import CategoriesComponent from "../categories/categories.component";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { ViewportScroller } from "@angular/common";
import { CategoryService } from "../../service/category.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { Category } from "../../model/category.model";
import { SpinnerComponent } from "../../ui/components/spinner/spinner.component";

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    NgbPagination,
    DropdownComponent,
    ButtonComponent,
    CategoriesComponent,
    SpinnerComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnDestroy {

  protected readonly PAGE_SIZE_OPTIONS: number[] = [5, 10, 20, 50, 100];

  protected readonly productsService: ProductService = inject(ProductService);
  private readonly categoriesService: CategoryService = inject(CategoryService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly scroller: ViewportScroller = inject(ViewportScroller);

  protected readonly category: Signal<Category> = computed(() =>
    this.categoriesService.allCategories.value()?.find(({ slug }) => slug === this.categorySlug())
  );
  private readonly categorySlug: Signal<string> = toSignal(this.activatedRoute.params.pipe(
    map(pathParams => pathParams['categorySlug'] ?? null)
  ));

  constructor() {
    effect(() => {
      this.productsService.category.set(this.categorySlug());
      document.title = this.category() ? `${this.category().name} | Products` : 'Products';
    });
  }

  protected changePage(pageNumber: number): void {
    this.productsService.pageNumber.set(pageNumber);
    this.scroller.scrollToPosition([0, 0]);
  }

  protected changePageSize(pageSize: number): void {
    this.productsService.pageNumber.set(1);
    this.productsService.pageSize.set(pageSize);
    this.scroller.scrollToPosition([0, 0]);
  }

  protected shouldShowBoundaryLinks(): boolean {
    return this.productsService.allProducts.value().total / this.productsService.pageSize() > 5;
  }

  ngOnDestroy(): void {
    this.productsService.category.set(undefined);
  }

}
