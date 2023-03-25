import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FooterComponent } from './components/footer/footer.component';
//Importo CircleProgress
import { NgCircleProgressModule } from 'ng-circle-progress';
//Import HTTP
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LenguajesComponent,
    HobbiesComponent,
    ExperienciasComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
