import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonGroupModule, PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { WallpaperComponent } from './wallpaper.component';

@NgModule({
  declarations: [WallpaperComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoContainerModule,
    FormsModule
  ],

  exports: [WallpaperComponent]
})
export class WallpaperComponentModule { }
