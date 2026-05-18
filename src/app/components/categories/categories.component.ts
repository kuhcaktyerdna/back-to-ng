import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../../ui/components/button/button.component";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-categories',
  imports: [
    RouterLink,
    ButtonComponent,
    NgbTooltip
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export default class CategoriesComponent {

  protected readonly categoriesService: CategoryService = inject(CategoryService);

}
