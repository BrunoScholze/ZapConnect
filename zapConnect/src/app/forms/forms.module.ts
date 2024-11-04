import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { PoButtonGroupModule, PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { WallpaperComponentModule } from '../wallpaper/wallpaper.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoContainerModule,
    FormsModule,
    WallpaperComponentModule

  ],

  exports: [FormsComponent]
})
export class FormsComponentModule { }
