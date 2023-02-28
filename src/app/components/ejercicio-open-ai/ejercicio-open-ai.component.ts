import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';

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
  constructor(private openaiService: OpenaiService) { }

  handleSubmit(){
    console.log(this.gender, this.weight, this.period, this.diseases)
    this.openaiService.getMenu(this.gender, this.weight, this.period, this.diseases)
      .subscribe(response => this.menu = response )
  }

}
