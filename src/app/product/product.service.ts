import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Initial Api Variable
  private apiUrl = environment.apiUrl + '/products';

  //Injecting built in angular services
  constructor(private http: HttpClient) {}

  // Observable as api returns this type
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  }
}
