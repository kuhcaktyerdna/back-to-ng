import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../core/product-card/product-card.component";
import { ProductService } from "../../service/product.service";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { DropdownComponent } from "../../ui/components/dropdown/dropdown.component";
import { CategoriesComponent } from "../categories/categories.component";
import { ActivatedRoute } from "@angular/router";
import { map, Subscription } from "rxjs";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    NgbPagination,
    DropdownComponent,
    ButtonComponent,
    CategoriesComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnInit, OnDestroy {

  protected readonly PAGE_SIZE_OPTIONS: number[] = [5, 10, 20, 50, 100];
  protected category$: Subscription;

  protected readonly productsService: ProductService = inject(ProductService);
  protected readonly activatedRoute = inject(ActivatedRoute);
  private readonly scroller = inject(ViewportScroller);

  ngOnInit(): void {
    this.category$ = this.activatedRoute.params.pipe(
      map(extractAllParams => extractAllParams['categorySlug'] ?? null)
    ).subscribe(category => this.productsService.category.set(category));
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
    this.category$.unsubscribe();
    this.productsService.category.set(undefined);
  }

}
