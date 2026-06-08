import { Component, inject } from '@angular/core';
import { CategoryService } from "@service/category.service";
import { RouterLink } from "@angular/router";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgClass } from "@angular/common";
import { ProductService } from "@service/product.service";
import { ButtonComponent } from "@ui/components";

@Component({
  selector: 'app-categories',
  imports: [
    RouterLink,
    ButtonComponent,
    NgbTooltip,
    NgClass
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export default class CategoriesComponent {

  protected readonly categoriesService: CategoryService = inject(CategoryService);
  protected readonly productService: ProductService = inject(ProductService);

}
