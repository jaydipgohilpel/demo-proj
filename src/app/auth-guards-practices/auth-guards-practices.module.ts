import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent],
  imports: [CommonModule, RouterModule,NavbarModule ],
  exports: [OneComponent, TwoComponent, ThreeComponent],
})
export class AuthGuardsPracticesModule {}
