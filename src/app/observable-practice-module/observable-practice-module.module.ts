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
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from '../navbar/navbar.component';

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
    MatButtonToggleModule,
    InputSwitchModule,
    CompliteSubjectDemoModule,
    MenubarModule,
    NavbarModule,
  ],
})
export class ObservablePracticeModuleModule {}
