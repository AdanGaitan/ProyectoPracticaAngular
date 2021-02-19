import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo>= new Array<Articulo>();
  constructor(private ruta:Router) { }

  ngOnInit(): void {

    this.articulos.push(
    { 
      nombre:'Televisor de 24 pulgadas',
      descripcion:'marcad dell con 4 años de gatantia',
      precio:1500,
      stock:10,
      precioMayorista:1400 
    },
    { 
      nombre:"Laptop I5",
      descripcion:'Laptop nueva con 8gb de ram', 
      precio:1500,
      stock:20,
      precioMayorista:1400,
    },
    {
      nombre:'Monitor',
      descripcion:'Monitor curvo con pantalla fullHD',
      precio:8000,
      stock:70,
      precioMayorista:7500
    }
    )
  }

  pasarParametro(articuloRecibido: Articulo){
      this.ruta.navigate(['articuloDetalle',{articulo: JSON.stringify(articuloRecibido) }])
  }

}
