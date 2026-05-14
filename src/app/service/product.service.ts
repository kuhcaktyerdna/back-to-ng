import { HttpClient } from "@angular/common/http";
import { inject, Injectable, resource, ResourceRef, signal, WritableSignal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { ProductResponse } from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly pageSize: WritableSignal<number> = signal(10);
  readonly pageNumber: WritableSignal<number> = signal(1);
  readonly category: WritableSignal<string> = signal(undefined);
  private readonly API_URL: string = 'https://dummyjson.com/products';
  private readonly http = inject(HttpClient);

  // singleProduct: ResourceRef<Product> = resource<Product, { id: number }>({
  //   request: () => ({ id: 1 }),
  //   loader: ({ request }) =>
  //     firstValueFrom(this.http.get<Product>(`${this.API_URL}/${request.id}`)),
  // });

  allProducts: ResourceRef<ProductResponse> = resource<ProductResponse, { skip: number, category: string | null }>({
    request: () => {
      const category = this.category();
      return category !== undefined ? { skip: (this.pageNumber() - 1) * this.pageSize(), category } : undefined;
    },
    loader: ({ request }) => {
      const products$ = this.http.get<ProductResponse>(this.buildUrl(request.skip, request.category));
      return firstValueFrom(products$);
    }
  });


  private buildUrl(skip: number, category: string): string {
    const url = new URL(category && `${this.API_URL}/category/${category}` || this.API_URL);
    if (skip !== null) {
      url.searchParams.set('skip', skip.toString());
    }

    url.searchParams.set('limit', this.pageSize().toString());
    return url.toString();
  }

}
