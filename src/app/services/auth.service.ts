import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

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
