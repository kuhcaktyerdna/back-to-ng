import { HttpClient } from "@angular/common/http";
import { inject, Injectable, linkedSignal, ResourceRef, signal, WritableSignal } from "@angular/core";
import { Product, ProductResponse } from "../model/product.model";
import { rxResource } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly pageSize: WritableSignal<number> = signal(10);
  readonly pageNumber: WritableSignal<number> = linkedSignal(() => {
    this.category();
    return 1;
  });
  readonly category: WritableSignal<string> = signal(undefined);
  private readonly API_URL: string = 'https://dummyjson.com/products';
  private readonly http = inject(HttpClient);

  readonly productId: WritableSignal<number> = signal(undefined);
  singleProduct: ResourceRef<Product> = rxResource<Product, { id: number }>({
    request: () => this.productId() !== undefined ? { id: this.productId() } : undefined,
    loader: ({ request }) =>
      this.http.get<Product>(`${this.API_URL}/${request.id}`),
  });

  allProducts: ResourceRef<ProductResponse> = rxResource<ProductResponse, { skip: number, category: string | null }>({
    request: () => {
      const category = this.category();
      return category !== undefined ? { skip: (this.pageNumber() - 1) * this.pageSize(), category } : undefined;
    },
    loader: ({ request }) =>
      this.http.get<ProductResponse>(this.buildUrl(request.skip, request.category))
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
