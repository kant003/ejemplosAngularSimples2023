import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './components/ejemplo6/ejemplo6.component';
import { EjercicioOpenAIComponent } from './components/ejercicio-open-ai/ejercicio-open-ai.component';

const routes: Routes = [
  {path:'ejemplo1', component: Ejemplo1Component},
  {path:'ejemplo2', component: Ejemplo2Component},
  {path:'ejemplo3', component: Ejemplo3Component},
  {path:'ejemplo4', component: Ejemplo4Component},
  {path:'ejemplo5', component: Ejemplo5Component},
  {path:'ejemplo6', component: Ejemplo6Component},
  {path:'openai', component: EjercicioOpenAIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
