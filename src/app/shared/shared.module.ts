import { ModuleWithProviders, NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

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
