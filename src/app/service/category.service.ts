import { inject, Injectable, resource, ResourceRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Category } from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL: string = 'https://dummyjson.com/products/categories';
  private readonly http = inject(HttpClient);

  allCategories: ResourceRef<Category[]> = resource<Category[], undefined>({
    loader: () => firstValueFrom(this.http.get<Category[]>(this.API_URL))
  });

}
