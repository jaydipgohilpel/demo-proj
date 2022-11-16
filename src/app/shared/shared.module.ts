import { ModuleWithProviders, NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [CardModule, MenubarModule, ButtonModule],
  exports: [CardModule, MenubarModule, ButtonModule],
  entryComponents: [],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
