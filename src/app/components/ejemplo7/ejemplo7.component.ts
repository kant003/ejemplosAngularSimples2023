import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  templateUrl: './ejemplo7.component.html',
  styleUrls: ['./ejemplo7.component.css']
})
export class Ejemplo7Component {
  colorDefault = 'blue'
  theme='pastel'
  
  randomColor(){
    return Math.random() > 0.5? 'orange': 'green'
  }
  isError(){
    return true
  }
}
