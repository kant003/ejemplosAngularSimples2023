import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.css']
})
export class Ejemplo8Component {
  result=0

  add(n1:number, n2:number){
    this.result = n1+n2
  }
}
