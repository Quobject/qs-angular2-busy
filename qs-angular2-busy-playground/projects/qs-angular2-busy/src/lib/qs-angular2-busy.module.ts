import { NgModule, ModuleWithProviders } from '@angular/core';
import { BusyDirective } from './busy.directive';
import { BusyComponent } from './busy.component';
import { BusyBackdropComponent } from './busy-backdrop.component';
import { BusyService } from './busy.service';
import { CommonModule } from '@angular/common';
import { BusyConfig, BUSY_CONFIG_DEFAULTS } from './busy-config';

export { BusyConfig } from './busy-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BusyDirective,
    BusyComponent,
    BusyBackdropComponent,
  ],
  providers: [
    BusyService,    
  ],
  exports: [
    BusyDirective,    
  ],
  entryComponents: [
    BusyComponent,
    BusyBackdropComponent
  ]
})
export class QsAngular2BusyModule {
  static BUSY_CONFIG_DEFAULTS: BusyConfig = BUSY_CONFIG_DEFAULTS;
 
}
