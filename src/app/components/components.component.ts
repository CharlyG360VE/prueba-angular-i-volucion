import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  //Mostrar el modal en pantalla
  abrirModal ( ) {
    //Carga del componente en el modal
    const dialogRef = this.dialog.open( ModalComponent );

    dialogRef.afterClosed().subscribe(result => {
      //Subscribe por RxJS Para obtener los datos solicitados
    });

  }

}
