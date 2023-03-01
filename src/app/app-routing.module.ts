import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo10Component } from './components/ejemplo10/ejemplo10.component';
import { Ejemplo11Component } from './components/ejemplo11/ejemplo11.component';
import { Ejemplo12Component } from './components/ejemplo12/ejemplo12.component';
import { Ejemplo13Component } from './components/ejemplo13/ejemplo13.component';
import { Ejemplo14Component } from './components/ejemplo14/ejemplo14.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './components/ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './components/ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './components/ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './components/ejemplo9/ejemplo9.component';
import { EjercicioOpenAIComponent } from './components/ejercicio-open-ai/ejercicio-open-ai.component';

const routes: Routes = [
  {path:'ejemplo1', component: Ejemplo1Component},
  {path:'ejemplo2', component: Ejemplo2Component},
  {path:'ejemplo3', component: Ejemplo3Component},
  {path:'ejemplo4', component: Ejemplo4Component},
  {path:'ejemplo5', component: Ejemplo5Component},
  {path:'ejemplo6', component: Ejemplo6Component},
  {path:'ejemplo7', component: Ejemplo7Component},
  {path:'ejemplo8', component: Ejemplo8Component},
  {path:'ejemplo9', component: Ejemplo9Component},
  {path:'ejemplo10', component: Ejemplo10Component},
  {path:'ejemplo11', component: Ejemplo11Component},
  {path:'ejemplo12', component: Ejemplo12Component},
  {path:'ejemplo13', component: Ejemplo13Component},
  {path:'ejemplo13/:id', component: Ejemplo13Component},
  {path:'ejemplo14', component: Ejemplo14Component},
  {path:'openai', component: EjercicioOpenAIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
