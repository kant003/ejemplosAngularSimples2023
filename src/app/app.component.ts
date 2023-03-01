import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplosSimplesAngular';
  laEdad = 0
  pintarEdad(edad:number){
    this.laEdad = edad
  }
}
