import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ng-components',
    pathMatch: 'full'
  },
  {
    path: 'ng-components',
    loadChildren: () => import('./ng-components/ng-components.module').then(m=>m.NgComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
