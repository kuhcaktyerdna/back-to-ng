import { Injectable, ResourceRef } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { Category } from "@model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL: string = 'https://dummyjson.com/products/categories';

  allCategories: ResourceRef<Category[]> = httpResource(() => ({ url: this.API_URL }));

}
