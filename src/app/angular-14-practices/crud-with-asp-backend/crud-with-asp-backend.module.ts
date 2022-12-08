import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudWithAspBackendRoutingModule } from './crud-with-asp-backend-routing.module';
import { DashboardRegistrationAspBackendComponent } from './dashboard-registration-asp-backend/dashboard-registration-asp-backend.component';

@NgModule({
  declarations: [DashboardRegistrationAspBackendComponent],
  imports: [CommonModule, CrudWithAspBackendRoutingModule],
  exports: [DashboardRegistrationAspBackendComponent],
})
export class CrudWithAspBackendModule {}
