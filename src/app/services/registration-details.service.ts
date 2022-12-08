import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registration } from '../interface/registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationDetailsService {
  apiUrl = environment.Base_URL + '/registrationDetails';
  constructor(private http: HttpClient) {}

  newRegistration(data: any): Observable<registration[]> {
    // return this.http.post<Registration[]>(this.apiUrl, data);
    // return this.http.post<registration[]>(environment.BackedendUrl+"/api/registration", data);
    return this.http.post<registration[]>(environment.BackedendUrl+"/api/Employee", data);
  }
  getallRegistrationData(): Observable<registration[]> {
    return this.http.get<registration[]>(environment.BackedendUrl+"/api/Employee");
  }
}
