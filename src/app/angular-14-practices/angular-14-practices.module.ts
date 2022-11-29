import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';
import { SharedModule } from '../shared/shared.module';
import { DummyComponent } from './dummy/dummy.component';
import { ParentsComponent } from './parents/parents.component';
import { ChieldsComponent } from './chields/chields.component';
import { DirectivesPracticesComponent } from './directives-practices/directives-practices.component';

@NgModule({
  declarations: [
    MainComponentComponent,
    DummyComponent,
    ParentsComponent,
    ChieldsComponent,
    DirectivesPracticesComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainComponentComponent],
})
export class Angular14PracticesModule {}
