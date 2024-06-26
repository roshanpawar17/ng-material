import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules imports
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatCardModule,
  MatButtonToggleModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class AngularMaterialModule { }
