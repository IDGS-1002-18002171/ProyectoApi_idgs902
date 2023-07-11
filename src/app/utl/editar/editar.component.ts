import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  alumno: AlumnosUtl = {
    id: 1234,
    nombre: 'Pedro',
    edad: 23,
    correo: 'pedro@gmail.com'
  };

  constructor(private activatedRoute: ActivatedRoute,private proyectoApiService: ProyectoApiService, private router:Router) { }

  actualizar() {

    this.proyectoApiService.actualizarAlumno(this.alumno).subscribe(
      (response) => {
        // El alumno se actualizó correctamente, realiza las acciones necesarias
        console.log('Alumno actualizado:', response);
      },
      (error) => {
        // Ocurrió un error al actualizar el alumno, maneja el error adecuadamente
        console.error('Error al actualizar alumno:', error);
      }
    );
    this.router.navigate(['verAlumnos'])
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']; // Obtiene el ID del alumno de la URL
      this.proyectoApiService.getAlumno(id).subscribe(
        (response) => {
          this.alumno = response; // Actualiza el objeto 'alumno' con los detalles del alumno obtenidos del servicio
        },
        (error) => {
          console.error('Error al obtener alumno:', error);
        }
      );
    });
  }
}
