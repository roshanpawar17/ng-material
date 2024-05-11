import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgComponentsComponent } from "./ng-components.component";
import { ButtonsIconsComponent } from "./buttons-icons/buttons-icons.component";
import { ButtonsToggleComponent } from "./buttons-toggle/buttons-toggle.component";
import { ElevationComponent } from "./elevation/elevation.component";
import { RippleComponent } from "./ripple/ripple.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  {
    path: '',
    component: NgComponentsComponent,
  },
  {
    path: 'buttons-icons',
    component: ButtonsIconsComponent
  },
  {
    path: 'button-toggle',
    component: ButtonsToggleComponent
  },
  {
    path: 'elevation',
    component: ElevationComponent
  },
  {
    path: 'ripple',
    component: RippleComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgComponentsRoutingModule {}
