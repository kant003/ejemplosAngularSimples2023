import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component {
  num: number = 0

  constructor(){
    setInterval( ()=>this.num = this.num +1 ,  2000 )
  }
  
}
