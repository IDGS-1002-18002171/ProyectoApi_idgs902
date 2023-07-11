import { Injectable } from '@angular/core';
import { AlumnosUtl } from './interfaces/utl.Interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {
private _alumnosUtl:AlumnosUtl[]=[
    {​​​​​​​​
id:1234,
nombre:'pedro',
edad:23,
correo:'pedro@gmail.com',
 
    }​​​​​​​​,
    {​​​​​​​​
id:772,
nombre:'Paulina',
edad:23,
correo:'paulina@gmail.com',
    }​​​​​​​​,
 
    {​​​​​​​​
id:22,
nombre:'Dario',
edad:23,
correo:'dario@gmail.com',
 
    }​​​​​​​​,
  ]
 
constructor(private http:HttpClient) {​​​​​​​​ }​​​​​​​​
 
getalumnos():AlumnosUtl[]{​​​​​​​​
return[...this._alumnosUtl]
}​​​​​​​​
 
public getAlumnos():Observable<AlumnosUtl[]>{​​​​​​​​
return this.http.get<AlumnosUtl[]>('https://localhost:7139/api/Grupos')
}​​​​​​​​
 
agregarNuevoAlumno(datos:AlumnosUtl){​​​​​​​​
return this.http.post('https://localhost:7139/api/Grupos',datos)
}
 ​​​​​​​​
 actualizarAlumno(alumno: AlumnosUtl): Observable<any> {
  const url = `https://localhost:7139/api/Grupos/${alumno.id}`;
  return this.http.put(url, alumno);
}
getAlumno(id: number): Observable<AlumnosUtl> {
  const url = `https://localhost:7139/api/Grupos/${id}`;
  return this.http.get<AlumnosUtl>(url);
}
eliminarAlumno(id: number): Observable<any> {
  const url = `https://localhost:7139/api/Grupos/${id}`;
  return this.http.delete(url);
}
}
