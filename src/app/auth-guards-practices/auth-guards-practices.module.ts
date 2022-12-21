import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent],
  imports: [CommonModule, RouterModule, NavbarModule],
  exports: [OneComponent, TwoComponent, ThreeComponent],
})
export class AuthGuardsPracticesModule {}
