import { HttpClient } from "@angular/common/http";
import { inject, Injectable, resource, ResourceRef } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API_URL: string = 'https://api.escuelajs.co/api/v1/products';
  private readonly http = inject(HttpClient);

  singleProduct: ResourceRef<Product> = resource<Product, { id: number }>({
    request: () => ({ id: 1 }),
    loader: ({ request }) =>
      firstValueFrom(this.http.get<Product>(`${this.API_URL}/${request.id}`)),
  });

  allProducts: ResourceRef<Product[]> = resource<Product[], { categoryId: number }>({
    request: () => ({ categoryId: null }),
    loader: ({ request }) =>
      firstValueFrom(this.http.get<any[]>(this.buildUrl(request.categoryId)))
  });


  private buildUrl(categoryId: number): string {
    return categoryId && `${this.API_URL}?categoryId=${categoryId}` || this.API_URL;
  }

}
