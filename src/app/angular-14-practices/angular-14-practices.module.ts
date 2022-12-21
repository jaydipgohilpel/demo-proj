import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Angular14RoutingModule } from './angular14-routing.module';
import { ChieldsComponent } from './chields/chields.component';
import { DataBindingPracticesComponent } from './data-binding-practices/data-binding-practices.component';
import { DirectivesPracticesComponent } from './directives-practices/directives-practices.component';
import { DummyComponent } from './dummy/dummy.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentsComponent } from './parents/parents.component';
import { EmpCodeFormatorPipe } from './pipes-practice/emp-code-formator.pipe';
import { GenderCasePipe } from './pipes-practice/gender-case.pipe';
import { MyPipePipe } from './pipes-practice/my-pipe.pipe';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';
import { SalaryInCurrencyPipe } from './pipes-practice/salary-in-currency.pipe';
import { RoutingPracticesComponent } from './routing-practices/routing-practices.component';
import { ServicesPracticesComponent } from './services-practices/services-practices.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

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
    UploadFileComponent,
    ServicesPracticesComponent,
  ],
  imports: [CommonModule, SharedModule,Angular14RoutingModule,RouterModule],
  exports: [MainComponentComponent,],
})
export class Angular14PracticesModule {}
