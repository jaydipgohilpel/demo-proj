import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
})
export class OneComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLogout() {
    this.authService.isLogin(null);
    localStorage.setItem('loginUser', '');
    this.router.navigate(['/login']);
    alert('Logout User');
  }
}
