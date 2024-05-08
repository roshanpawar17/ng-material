import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgComponentsComponent } from './ng-components.component';
import { NgComponentsRoutingModule } from './ng-components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { ButtonsToggleComponent } from './buttons-toggle/buttons-toggle.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ElevationComponent } from './elevation/elevation.component';
import { RippleComponent } from './ripple/ripple.component';

@NgModule({
  declarations: [
    NgComponentsComponent,
    ButtonsIconsComponent,
    ButtonsToggleComponent,
    ElevationComponent,
    RippleComponent
  ],
  imports: [
    CommonModule,
    NgComponentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgComponentsModule {
  constructor(){
    console.log('NgComponentsModule');
  }
}
