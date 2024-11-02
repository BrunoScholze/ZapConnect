import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { PoButtonGroupModule, PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoButtonGroupModule
  ],

  exports: [FormsComponent]
})
export class FormsComponentModule { }
