import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MenubarModule, ButtonModule,],
  exports: [NavbarComponent]
})
export class NavbarModule {}
