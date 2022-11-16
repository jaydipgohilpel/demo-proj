import { NavbarModule } from './../navbar/navbar.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponuntComponent } from './first-componunt/first-componunt.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { SecondComponuntComponent } from './second-componunt/second-componunt.component';
import { ThirdComponuntComponent } from './third-componunt/third-componunt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CompliteSubjectDemoModule } from './complite-subject-demo/complite-subject-demo.module';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ],
})
export class ObservablePracticeModuleModule {}
