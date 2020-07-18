import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ComponentsComponent } from './components.component';


const routes: Routes = [
  
  {
    path: 'inicio',
    component: ComponentsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }