import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { ComponentsComponent } from './components.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
