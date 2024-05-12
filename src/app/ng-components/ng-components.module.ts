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
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { MenuComponent } from './menu/menu.component';
import { BadgeComponent } from './badge/badge.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [
    NgComponentsComponent,
    ButtonsIconsComponent,
    ButtonsToggleComponent,
    ElevationComponent,
    RippleComponent,
    MenuComponent,
    BadgeComponent,
    OpenDialogComponent
  ],
  imports: [
    CommonModule,
    NgComponentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: globalRippleConfig
    }
  ]
})
export class NgComponentsModule {
  constructor(){
    console.log('NgComponentsModule');
  }
}
