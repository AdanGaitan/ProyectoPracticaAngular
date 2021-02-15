import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVence:Date;
}


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean=true;
  nombres : Array<string>=["Maria","Ana","Juan","Pedro"];
  pestana:string="";
  productos : Array<Producto>=[
    {
      nombre: 'Arroz',
      stock:15,
      fabricante : 'Distribuidor Industrial',
      fechaVence: new Date('04/15/2021')
    },
    {
      nombre: 'Fideos',
      stock:20,
      fabricante : 'Merolio',
      fechaVence: new Date('07/15/2021')
    },
    {
      nombre: 'Polenta',
      stock:200,
      fabricante : 'Distribuidor Industrial',
      fechaVence: new Date('04/20/2021')
    }

  ]




  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando =false;
    }, 5000);
  }

  alternar(){
    this.cargando = !this.cargando;
   
  }

  cambiarPestana(pestana:string){
    this.pestana=pestana;

  }

}
