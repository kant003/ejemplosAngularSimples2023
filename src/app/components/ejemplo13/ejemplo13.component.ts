import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo13',
  templateUrl: './ejemplo13.component.html',
  styleUrls: ['./ejemplo13.component.css']
})
export class Ejemplo13Component implements OnInit{
  elId = ''
  constructor(public activateRoute: ActivatedRoute){
    this.elId = activateRoute.snapshot.params['id']
  }
  ngOnInit(){
    this.elId = this.activateRoute.snapshot.params['id']

    this.activateRoute.params.subscribe(( {id} ) => {
      this.elId = id
      console.log('cambia',id)
  })
  }
}
