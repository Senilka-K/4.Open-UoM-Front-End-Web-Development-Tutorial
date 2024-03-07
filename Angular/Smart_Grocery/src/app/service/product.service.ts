import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../model/add-product-response.model';
import { Product } from '../model/product.model';
import { ProductResponse } from '../model/product-response.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
private baseUrl = 'https://host1.open.uom.lk:8000/';
  constructor(private http :HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json'}),
  };
  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      `${this.baseUrl}api/product`,
      product,
      this.httpOptions
    );
  }

  getProducts() : Observable<ProductResponse>{
    return this.http.get<ProductResponse>( `${this.baseUrl}api/product`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/products', product);
  }
}
