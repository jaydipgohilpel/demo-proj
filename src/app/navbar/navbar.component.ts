import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/dashboard-all'],
      },
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
        label: 'rxjs-and-other-practises',
        icon: 'pi pi-fw pi-reply',
        routerLink: ['/rxjs-and-other-practises'],
      },
    ];
  }

  onLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't Logout this Site !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout it!',
    }).then((result) => {
      if (result.isConfirmed) {
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
        });
        this.authService.isLogin(null);
        this.router.navigate(['/login']);
      }
    });
  }
}
