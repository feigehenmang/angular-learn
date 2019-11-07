import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { ActiveComponent } from './active/active.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [ActiveComponent, WrapperComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ],
  entryComponents: [ActiveComponent]
})
export class CustomModule { }
