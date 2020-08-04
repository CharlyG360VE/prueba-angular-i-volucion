import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: string = 'https://pruebasasivamosffiebackend.ivolucion.com/api/common';

  constructor( private http: HttpClient ) { };

  obtenerDepartamentos () {
    //Retornando la data de la peticion como un Observable de tipo Departamentos[]
    return this.http.get<Departamentos[]>( `${ this.url }/ListDepartamento` );
  };

  obtenerMunicipios ( id: string ) {
    //Retornando la data de la peticion como un Observable de tipo Departamentos[]
    return this.http.get<Departamentos[]>( `${ this.url }/ListMunicipiosByIdDepartamento?idDepartamento=${ id }` );
  };

}
