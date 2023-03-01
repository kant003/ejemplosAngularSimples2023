import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paresMayuscula'
})
export class ParesMayusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let letras = value.split('') // ['a','n','g']
    letras.map((letra,index) =>  
      index%2===0?letra=letra.toUpperCase() : 
      letra=letra.toLowerCase())
    return letras.join()
  }

}
