import { registration } from './../../interface/registration';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReagistrationAngular14Service {

  apiUrl = environment.Base_URL + '/registration-form-angular-14';
  constructor(private http: HttpClient) {}
  newRegistration(data: any): Observable<registration[]> {
    return this.http.post<registration[]>(this.apiUrl, data);
  }
}
