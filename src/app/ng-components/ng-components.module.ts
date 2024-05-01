import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgComponentsComponent } from './ng-components.component';
import { NgComponentsRoutingModule } from './ng-components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { ButtonsToggleComponent } from './buttons-toggle/buttons-toggle.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgComponentsComponent,
    ButtonsIconsComponent,
    ButtonsToggleComponent
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
