import { inject, Injectable, ResourceRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../model/category.model";
import { rxResource } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL: string = 'https://dummyjson.com/products/categories';
  private readonly http = inject(HttpClient);

  allCategories: ResourceRef<Category[]> = rxResource<Category[], undefined>({
    loader: () => this.http.get<Category[]>(this.API_URL)
  });

}
