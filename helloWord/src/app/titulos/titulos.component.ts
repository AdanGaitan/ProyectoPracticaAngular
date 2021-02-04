import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre:string = 'luciano';
  apellido:string = 'perez';
  alumno: any = {
    nombre:'carlos',
    apellido:'pineda',
    edad:21
  }

  imagen:string='https://kinsta.com/es/wp-content/uploads/sites/8/2019/09/jpg-vs-jpeg-1024x512.jpg';

  inputNuevo:string='hola soy un imput';
  correo:string='';
  password:string='';
  constructor() { }

  ngOnInit(): void {

  }
  ingresar(){
    console.log(this.correo);
    console.log(this.password);
  }

}
