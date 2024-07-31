import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Initial Api Variable
  private apiUrl = environment.apiUrl + '/cart';
  private apiCheckout = environment.apiUrl + '/checkout';
  //Injecting built in angular services
  constructor(private http: HttpClient) {}

    // Observable as api returns this type
    addToCart(product:Product): Observable<Product[]> {
      return this.http.post<Product[]>(this.apiUrl,product);
    }

    getCartItems(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }

    deleteItem(): Observable<void> {
      return this.http.delete<void>(this.apiUrl);
    }

    checkout(products: Product[]): Observable<void> {
      return this.http.post<void>(this.apiCheckout, products);
    }




}
