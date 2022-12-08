import { RouterModule } from '@angular/router';
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
import { MyPipePipe } from './pipes-practice/my-pipe.pipe';
import { EmpCodeFormatorPipe } from './pipes-practice/emp-code-formator.pipe';
import { GenderCasePipe } from './pipes-practice/gender-case.pipe';
import { SalaryInCurrencyPipe } from './pipes-practice/salary-in-currency.pipe';
import { RoutingPracticesComponent } from './routing-practices/routing-practices.component';
import { Angular14RoutingModule } from './angular14-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrudWithAspBackendModule } from './crud-with-asp-backend/crud-with-asp-backend.module';

@NgModule({
  declarations: [
    MainComponentComponent,
    DummyComponent,
    ParentsComponent,
    ChieldsComponent,
    DirectivesPracticesComponent,
    DataBindingPracticesComponent,
    PipesPracticeComponent,
    MyPipePipe,
    EmpCodeFormatorPipe,
    GenderCasePipe,
    SalaryInCurrencyPipe,
    RoutingPracticesComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, SharedModule,Angular14RoutingModule,RouterModule,CrudWithAspBackendModule],
  exports: [MainComponentComponent,],
})
export class Angular14PracticesModule {}
