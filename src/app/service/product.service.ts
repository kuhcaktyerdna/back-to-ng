import { HttpClient } from "@angular/common/http";
import { inject, Injectable, resource } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API_URL: string = 'https://fakestoreapi.com/products';
  private readonly http = inject(HttpClient);

  products = resource<Product[], undefined>({
    loader: () => firstValueFrom(this.http.get<any[]>(this.API_URL))
  });


}
