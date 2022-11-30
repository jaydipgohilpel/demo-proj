import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';
import { SharedModule } from '../shared/shared.module';
import { DummyComponent } from './dummy/dummy.component';
import { ParentsComponent } from './parents/parents.component';
import { ChieldsComponent } from './chields/chields.component';
import { DirectivesPracticesComponent } from './directives-practices/directives-practices.component';
import { DataBindingPracticesComponent } from './data-binding-practices/data-binding-practices.component';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';

@NgModule({
  declarations: [
    MainComponentComponent,
    DummyComponent,
    ParentsComponent,
    ChieldsComponent,
    DirectivesPracticesComponent,
    DataBindingPracticesComponent,
    PipesPracticeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainComponentComponent],
})
export class Angular14PracticesModule {}
