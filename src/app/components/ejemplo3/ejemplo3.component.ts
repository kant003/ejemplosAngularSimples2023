import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component {
  profes: string[] = ['bea', 'pepe']
  
  constructor(){
    this.profes = ['bea','pepe','angel','antonio']
  }

  

}
