import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Dialog1Component,
    Dialog2Component
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
