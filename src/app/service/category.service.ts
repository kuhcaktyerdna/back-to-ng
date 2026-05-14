import { Injectable, resource, ResourceRef } from "@angular/core";

class Category {
  slug: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL: string = 'https://dummyjson.com/products/categories';

  allCategories: ResourceRef<Category[]> = resource<Category[], undefined>({
    loader: () => fetch(this.API_URL).then<Category[]>(res => res.json())
  });

}
