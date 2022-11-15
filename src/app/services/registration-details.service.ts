import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../interface/registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationDetailsService {
  apiUrl = environment.Base_URL + '/registrationDetails';
  constructor(private http: HttpClient) {}

  newRegistration(data: any): Observable<Registration[]> {
    return this.http.post<Registration[]>(this.apiUrl, data);
  }
}
