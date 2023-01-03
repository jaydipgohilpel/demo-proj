import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainCompComponent } from './main-comp/main-comp.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

@NgModule({
  declarations: [MainCompComponent, TempleteDrivenFormComponent],
  imports: [CommonModule],
  exports: [MainCompComponent],
})
export class FormPracticeModuleModule {}
