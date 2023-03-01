import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo11',
  templateUrl: './ejemplo11.component.html',
  styleUrls: ['./ejemplo11.component.css']
})
export class Ejemplo11Component {
  @Input() 
  color = 'blue'
  @Input() 
  text = ''
}
