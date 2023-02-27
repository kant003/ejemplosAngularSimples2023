import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-open-ai',
  templateUrl: './ejercicio-open-ai.component.html',
  styleUrls: ['./ejercicio-open-ai.component.css']
})
export class EjercicioOpenAIComponent {
  gender = 'un hombre'
  weight = 80
  period = 'el desayuno'
  diseases = ''
  menu='...'

  handleSubmit(){
    console.log(this.gender, this.weight, this.period, this.diseases)
  }

}
