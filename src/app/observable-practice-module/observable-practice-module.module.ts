import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from './../navbar/navbar.module';
import { CompliteSubjectDemoModule } from './complite-subject-demo/complite-subject-demo.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponuntComponent } from './first-componunt/first-componunt.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { SecondComponuntComponent } from './second-componunt/second-componunt.component';
import { ThirdComponuntComponent } from './third-componunt/third-componunt.component';

@NgModule({
  declarations: [
    FirstComponuntComponent,
    LeftSidebarComponent,
    SecondComponuntComponent,
    ThirdComponuntComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, NavbarModule],
  exports: [
    FirstComponuntComponent,
    LeftSidebarComponent,
    SecondComponuntComponent,
    ThirdComponuntComponent,
    DashboardComponent,
    CompliteSubjectDemoModule,
    SharedModule,
  ],
})
export class ObservablePracticeModuleModule {}
