import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  alumno: AlumnosUtl = {
    id: 1234,
    nombre: 'Pedro',
    edad: 23,
    correo: 'pedro@gmail.com'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private proyectoApiService: ProyectoApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.proyectoApiService.getAlumno(id).subscribe(
        response => {
          this.alumno = response;
          this.eliminarAlumno();
        },
        error => {
          console.error('Error al obtener alumno:', error);
        }
      );
    });
  }

  eliminarAlumno(): void {
    this.proyectoApiService.eliminarAlumno(this.alumno.id).subscribe(
      response => {
        console.log('Alumno eliminado:', response);
        this.router.navigate(['verAlumnos']);
      },
      error => {
        console.error('Error al eliminar alumno:', error);
      }
    );
  }
}
