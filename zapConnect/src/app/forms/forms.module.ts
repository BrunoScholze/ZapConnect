import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { PoButtonGroupModule, PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent, FormsComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoContainerModule,
    FormsModule
  ],

  exports: [FormsComponent]
})
export class FormsComponentModule { }
