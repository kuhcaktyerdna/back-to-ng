import { httpResource } from "@angular/common/http";
import { Injectable, linkedSignal, ResourceRef, signal, WritableSignal } from "@angular/core";
import { Product, ProductResponse } from "@model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly pageSize: WritableSignal<number> = signal(10);
  readonly pageNumber: WritableSignal<number> = linkedSignal(() => {
    this.pageSize();
    this.category();
    return 1;
  });
  readonly category: WritableSignal<string> = signal(undefined);
  private readonly API_URL: string = 'https://dummyjson.com/products';

  readonly productId: WritableSignal<number> = signal(undefined);

  singleProduct: ResourceRef<Product> = httpResource(() =>
    this.productId() !== undefined ? { url: `${this.API_URL}/${this.productId()}` } : undefined);

  allProducts: ResourceRef<ProductResponse> = httpResource(() => {
    const category = this.category();
    if (category === undefined) {
      return undefined;
    }

    const skip = (this.pageNumber() - 1) * this.pageSize();
    return { url: this.buildUrl(skip, category) };
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
