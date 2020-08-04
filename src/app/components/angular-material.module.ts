import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule
  ]
})
export class AngularMaterialModule { }
