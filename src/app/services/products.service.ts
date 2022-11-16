import { Product } from '../interface/product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = environment.Base_URL + '/products';

  private dataUpdated = new Subject<void>();
  isdataUpdated$ = this.dataUpdated.asObservable();

  public Product = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getAllProductNewOne(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.Base_URL + '/products-2');
  }

  createProduct(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, data);
  }

  createProductNewOne(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(
      environment.Base_URL + '/products-2',
      data
    );
  }
  getSingleProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, data: any): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.apiUrl}/${id}`, data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  productDataUpdated(): void {
    this.dataUpdated.next();
  }
  getAllProductSubject(data: any) {
    this.Product.next(data);
  }

  getDummyDataForRxjs(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }
}
