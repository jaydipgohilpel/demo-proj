import { ObservablePracticeModuleModule } from './observable-practice-module/observable-practice-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PassDataInHeaderComponent } from './pass-data-in-header/pass-data-in-header.component';
import { RegistrationInReactiveFormComponent } from './registration-in-reactive-form/registration-in-reactive-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardsPracticesModule } from './auth-guards-practices/auth-guards-practices.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { DashboardAllComponent } from './dashboard-all/dashboard-all.component';
import { MenubarModule } from 'primeng/menubar';
import { NavbarModule } from './navbar/navbar.module';
import { RxjsAndOtherPractisesComponent } from './rxjs-and-other-practises/rxjs-and-other-practises.component';
import { SharedModule } from './shared/shared.module';
import { Angular14PracticesModule } from './angular-14-practices/angular-14-practices.module';
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
