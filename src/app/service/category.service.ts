import { Injectable, resource, ResourceRef } from "@angular/core";
import { Category } from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL: string = 'https://dummyjson.com/products/categories';

  allCategories: ResourceRef<Category[]> = resource<Category[], undefined>({
    loader: () => fetch(this.API_URL).then<Category[]>(res => res.json())
  });

}
