import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponentComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[MainComponentComponent]
})
export class Angular14PracticesModule { }
