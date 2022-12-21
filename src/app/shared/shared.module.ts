import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    PanelMenuModule,
    RouterModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    RatingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
  ],
  exports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    PanelMenuModule,
    RouterModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    RatingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
  ],
  entryComponents: [],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
