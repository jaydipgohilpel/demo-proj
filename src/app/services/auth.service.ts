import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  actvieUser = new BehaviorSubject<any>(null);

  constructor() {}
  isLogin(data: any) {
    this.actvieUser.next(data);
  }
}
