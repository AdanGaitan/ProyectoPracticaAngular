import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {

    if(valor.toString().length >120)
    {
      valor = valor.substr(0,140)
    }
    valor=valor + ' continuara...';
    return valor;
  }
  
}
