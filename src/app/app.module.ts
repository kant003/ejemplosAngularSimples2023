import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { EjercicioOpenAIComponent } from './components/ejercicio-open-ai/ejercicio-open-ai.component';
import { HttpClientModule} from '@angular/common/http';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './components/ejemplo6/ejemplo6.component'
@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    EjercicioOpenAIComponent,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
