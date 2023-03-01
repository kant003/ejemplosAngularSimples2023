import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo12',
  templateUrl: './ejemplo12.component.html',
  styleUrls: ['./ejemplo12.component.css']
})
export class Ejemplo12Component {
  @Output()
  onChangeEdad = new EventEmitter<number>()

  _edad = 9

  set edad(valor: number){
    this._edad = valor
    this.onChangeEdad.emit(this._edad)
  }

  get edad(): number{
    return this._edad
  }

  constructor(){  }
  
  ngOnInit(){
    this.onChangeEdad.emit(this._edad)
  }

}
