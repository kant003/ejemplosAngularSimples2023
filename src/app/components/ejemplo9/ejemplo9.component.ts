import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.css']
})
export class Ejemplo9Component {
  email='pepe@pepe.es'
  password=''
  handleSubmit(){
    alert(`Los datos del formulario son: ${this.email} ${this.password}`)
  }
}
