import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../core/product-card/product-card.component";
import { ProductService } from "../../service/product.service";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { DropdownComponent } from "../../ui/components/dropdown/dropdown.component";

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    NgbPagination,
    DropdownComponent,
    ButtonComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  protected readonly PAGE_SIZE_OPTIONS: number[] = [5, 10, 20, 50, 100];

  protected readonly productsService: ProductService = inject(ProductService);

  protected changePage(pageNumber: number): void {
    this.productsService.pageNumber.set(pageNumber);
  }

  protected changePageSize(pageSize: number): void {
    this.productsService.pageSize.set(pageSize);
  }

  protected shouldShowBoundaryLinks(): boolean {
    return this.productsService.allProducts.value().total / this.productsService.pageSize() > 5;
  }

}
