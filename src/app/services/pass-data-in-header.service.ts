import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class PassDataInHeaderService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.Base_URL + '/jewelery';

  getProductList(): Observable<Product[]> {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: '@jaydip-auth-token$12345',
      timeout: '5000',
    });
    let time = httpHeaders.get('timeout');
    if (time == '5000') {
      httpHeaders = httpHeaders.append(
        'Authorization',
        '@jaydipGohil-new-auth-token$12345'
      );
    }
    // custom headers
    httpHeaders = httpHeaders.set('jeweleryName', 'dsdsd');
    httpHeaders = httpHeaders.set('reqestedBy', 'jaydip');
    return this.http.get<Product[]>(this.apiUrl, { headers: httpHeaders });
  }
}
