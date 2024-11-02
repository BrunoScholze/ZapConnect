import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms-component/forms.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}