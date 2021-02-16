import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string="";
  apellido: string="";
  

  
}


@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  


  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoAlumnos.push({
      nombre:this.alumno.nombre,
      apellido:this.alumno.apellido
    })

  }
  alumno: Alumno = new Alumno();
  listadoAlumnos:Array<Alumno>=new Array<Alumno>();

}
