import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule, 
    PoPageModule, 
    PoFieldModule,
    PoButtonModule
  ],

  exports: [FormsComponent]  
})
export class FormsComponentModule { }