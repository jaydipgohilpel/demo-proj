import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { TabMenuModule } from 'primeng/tabmenu';
import { Angular14PracticesModule } from './angular-14-practices/angular-14-practices.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardsPracticesModule } from './auth-guards-practices/auth-guards-practices.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { DashboardAllComponent } from './dashboard-all/dashboard-all.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarModule } from './navbar/navbar.module';
import { ObservablePracticeModuleModule } from './observable-practice-module/observable-practice-module.module';
import { PassDataInHeaderComponent } from './pass-data-in-header/pass-data-in-header.component';
import { RegistrationInReactiveFormComponent } from './registration-in-reactive-form/registration-in-reactive-form.component';
import { RxjsAndOtherPractisesComponent } from './rxjs-and-other-practises/rxjs-and-other-practises.component';
import { AuthGuard } from './services/auth.guard';
import { SharedModule } from './shared/shared.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductComponent,
    ViewProductsComponent,
    UpdateProductComponent,
    PassDataInHeaderComponent,
    RegistrationInReactiveFormComponent,
    LoginComponent,
    DashboardAllComponent,
    RxjsAndOtherPractisesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    CommonModule,
    HotToastModule.forRoot(),
    ObservablePracticeModuleModule,
    AuthGuardsPracticesModule,
    RouterModule,
    MenubarModule,
    NavbarModule,
    SharedModule,
    Angular14PracticesModule,
  ],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
