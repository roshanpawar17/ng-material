import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules imports
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatMenuModule,
  MatBadgeModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
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
