import { HttpClient } from "@angular/common/http";
import { inject, Injectable, resource, ResourceRef, signal, WritableSignal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Product, ProductResponse } from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly pageSize: WritableSignal<number> = signal(10);
  readonly pageNumber: WritableSignal<number> = signal(1);
  private readonly API_URL: string = 'https://dummyjson.com/products';
  private readonly http = inject(HttpClient);

  singleProduct: ResourceRef<Product> = resource<Product, { id: number }>({
    request: () => ({ id: 1 }),
    loader: ({ request }) =>
      firstValueFrom(this.http.get<Product>(`${this.API_URL}/${request.id}`)),
  });

  allProducts: ResourceRef<ProductResponse> = resource<ProductResponse, { skip: number }>({
    request: () => ({ skip: (this.pageNumber() - 1) * this.pageSize() }),
    loader: ({ request }) => {
      const products$ = this.http.get<ProductResponse>(this.buildUrl(request.skip));
      return firstValueFrom(products$);
    }
  });


  private buildUrl(skip: number): string {
    const url = new URL(this.API_URL);
    if (skip !== null) {
      url.searchParams.set('skip', skip.toString());
    }

    url.searchParams.set('limit', this.pageSize().toString());
    return url.toString();
  }

}
