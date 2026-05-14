import { Component, inject } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [
    RouterLink
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  protected readonly categoriesService: CategoryService = inject(CategoryService);

}
