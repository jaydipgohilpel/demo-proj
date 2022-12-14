import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './auth-guards-practices/one/one.component';
import { ThreeComponent } from './auth-guards-practices/three/three.component';
import { TwoComponent } from './auth-guards-practices/two/two.component';
import { DashboardAllComponent } from './dashboard-all/dashboard-all.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CompliteDashboardComponent } from './observable-practice-module/complite-subject-demo/complite-dashboard/complite-dashboard.component';
import { DashboardComponent } from './observable-practice-module/dashboard/dashboard.component';
import { PassDataInHeaderComponent } from './pass-data-in-header/pass-data-in-header.component';
import { RegistrationInReactiveFormComponent } from './registration-in-reactive-form/registration-in-reactive-form.component';
import { RxjsAndOtherPractisesComponent } from './rxjs-and-other-practises/rxjs-and-other-practises.component';
import { AuthGuard } from './services/auth.guard';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard-all',
    component: DashboardAllComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-products',
    component: ViewProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pass-data-in-header',
    component: PassDataInHeaderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    component: RegistrationInReactiveFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observable-practice-module-dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'observable-complite-practice',
    component: CompliteDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth-guards-practices',
    component: OneComponent,
    canActivate: [AuthGuard],
  },
  { path: 'twocomponent', component: TwoComponent, canActivate: [AuthGuard] },
  {
    path: 'threecomponent',
    canActivate: [AuthGuard],
    component: ThreeComponent,
  },
  {
    path: 'rxjs-and-other-practises',
    canActivate: [AuthGuard],
    component: RxjsAndOtherPractisesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
