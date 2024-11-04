import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-wallpaper',
    pathMatch: 'full',
  },
  {
    path: 'app-forms-component',
    component: FormsComponent,
  },
  {
    path: 'app-wallpaper',
    component: WallpaperComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
