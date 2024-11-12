import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallpaperComponent } from './assets/pages/wallpaper/wallpaper.component';
import { FormsComponent } from './assets/pages/forms/forms.component';
import { ThemeComponent } from './assets/pages/Theme/Theme.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-forms-component',
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
  {
    path: 'app-theme-forms',
    component: ThemeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
