import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrationAngular14 } from './../../interface/registration';

@Injectable({
  providedIn: 'root'
})
export class ReagistrationAngular14Service {

  apiUrl = environment.Base_URL + '/registration-form-angular-14';
  constructor(private http: HttpClient) {}
  newRegistration(data: any): Observable<RegistrationAngular14[]> {
    return this.http.post<RegistrationAngular14[]>(this.apiUrl, data);
  }
  getAllRegistrationData(): Observable<RegistrationAngular14[]> {
    return this.http.get<RegistrationAngular14[]>(this.apiUrl);
  }
}
