import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    ModalComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
