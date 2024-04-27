import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgComponentsComponent } from "./ng-components.component";

const routes: Routes = [
  {
    path: '',
    component: NgComponentsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgComponentsRoutingModule {}
