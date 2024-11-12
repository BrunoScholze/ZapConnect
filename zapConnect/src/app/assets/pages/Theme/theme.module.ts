import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonGroupModule, PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { ThemeComponent } from './Theme.component';

@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoContainerModule,
    FormsModule
  ],

  exports: [ThemeComponent]
})
export class ThemeComponentModule { }
