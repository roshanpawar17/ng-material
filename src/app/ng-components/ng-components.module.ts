import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgComponentsComponent } from './ng-components.component';
import { NgComponentsRoutingModule } from './ng-components-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NgComponentsComponent
  ],
  imports: [
    CommonModule,
    NgComponentsRoutingModule,
    SharedModule
  ]
})
export class NgComponentsModule {
  constructor(){
    console.log('NgComponentsModule');
  }
}
