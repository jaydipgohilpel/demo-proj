import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard-all',
  templateUrl: './dashboard-all.component.html',
})
export class DashboardAllComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'View Products',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/view-products'],
      },

      {
        label: 'pass-data-in-header',
        icon: 'pi pi-fw pi-sort-alt',
        routerLink: ['/pass-data-in-header'],
      },
      {
        label: 'Registration',
        icon: 'pi pi-fw pi-file-edit',
        routerLink: ['/registration'],
      },
      {
        label: 'observable & subject',
        icon: 'pi pi-fw pi-calendar   ',
        routerLink: ['/observable-practice-module-dashboard'],
      },
      {
        label: 'observable & subject complite practice',
        icon: 'pi pi-fw pi-cloud',
        routerLink: ['/observable-complite-practice'],
      },
      {
        label: 'auth guards practices',
        icon: 'pi pi-fw pi-user-edit',
        routerLink: ['/auth-guards-practices'],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['/auth-guards-practices'],
        command: () => this.onLogout(),
      },
    ];
  }
  onLogout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: 'User has been Logout',
    })
    this.authService.isLogin(null);
    this.router.navigate(['/login']);
  }
}
