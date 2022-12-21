import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompliteDashboardComponent } from './complite-dashboard/complite-dashboard.component';
import { CompliteDatatableComponent } from './complite-datatable/complite-datatable.component';
import { CompliteFooterComponent } from './complite-footer/complite-footer.component';
import { CompliteFormCompoComponent } from './complite-form-compo/complite-form-compo.component';
import { CompliteLeftbarComponent } from './complite-leftbar/complite-leftbar.component';

@NgModule({
  declarations: [
    CompliteLeftbarComponent,
    CompliteFormCompoComponent,
    CompliteDatatableComponent,
    CompliteDashboardComponent,
    CompliteFooterComponent,
  ],
  imports: [CommonModule,  NavbarModule, SharedModule],
  exports: [
    CompliteLeftbarComponent,
    CompliteFormCompoComponent,
    CompliteDatatableComponent,
    CompliteDashboardComponent,
  ],
})
export class CompliteSubjectDemoModule {}
