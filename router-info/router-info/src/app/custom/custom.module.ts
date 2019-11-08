import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { ActiveComponent } from './active/active.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { DirectiveModule } from '../common/directive/directive.module';
import { HighDirective } from '../common/directive/high.directive';
import { HideDirective } from '../common/directive/hide.directive';
import { GridComponent } from './grid/grid.component';
import { AppTemplateDirective } from './app-template.directive';
import { GridModule } from './grid/grid.module';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [ActiveComponent, WrapperComponent, HighDirective, HideDirective, AppTemplateDirective],
  imports: [
    CommonModule,
    CustomRoutingModule,
    GridModule
  ],
  entryComponents: [ActiveComponent]
})
export class CustomModule { }
