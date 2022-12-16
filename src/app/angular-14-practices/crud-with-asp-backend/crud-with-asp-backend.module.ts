import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudWithAspBackendRoutingModule } from './crud-with-asp-backend-routing.module';
import { DashboardRegistrationAspBackendComponent } from './dashboard-registration-asp-backend/dashboard-registration-asp-backend.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardRegistrationAspBackendComponent],
  imports: [CommonModule, CrudWithAspBackendRoutingModule,SharedModule],
  exports: [DashboardRegistrationAspBackendComponent],
})
export class CrudWithAspBackendModule {}
