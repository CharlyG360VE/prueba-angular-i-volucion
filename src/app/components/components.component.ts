import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
//Interfaces
import { Departamento, Departamentos } from '../interfaces/interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  //Almacenar data recibida de Departamentos y Municipios
  id: string = 'No hay ningun ID seleccionado.';
  departamentos: Departamento[] = [];
  municipios: Departamentos[] = [];

  constructor( private restSvc: RestService ) { }

  ngOnInit(): void {
    this.ObtenerDepartamentos();
  }

  //Obtener Departamentos
  ObtenerDepartamentos () {
    this.restSvc.obtenerDepartamentos()
      .subscribe( resp => {
        //Spread para manipular la data recibida
        const departamentos = [...resp];
        //Manipulando la data para adaptarla al selector de Angular Material
        for ( let departamento of departamentos ) {
          this.departamentos.push( { value: departamento.localizacionId, viewValue: departamento.descripcion } )
        };

      } );
  };
  //Obtener Municipios
  obtenerMunicipios ( id: string ) {
    //Validacion para que no realice una peticion vacia
    if ( id.length > 0 ) {
      //Recibiendo Data del servicio
      this.restSvc.obtenerMunicipios(id)
      .subscribe( resp => {
        this.municipios = resp;
      } );

    };
  };

}
