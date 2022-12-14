import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product';

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

  uploadFiletoAspcore(data: any): Observable<any> {
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('files', data.files, data.files.name);
    formData.append('name', data.name);
    return this.http.post<any>(
      'https://localhost:7294/api/FileUpoads/upload',
      formData
    );
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
