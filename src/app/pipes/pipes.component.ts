import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo:string='hola soy un titulo';
  dinero:number=2400;
  ganacias:number=0.54;
  fechaNacimiento:Date = new Date('02-1-2020');
  textoLargo: string="Lorem ipsum dolor sit amet consectetur adipisicing elit A quae rem porro laboriosam ex dolorum impedit quo fuga sunt ut consectetur ab omnis hic et quia excepturi voluptas inventore iste"
  constructor() { }

  ngOnInit(): void {
  }

}
