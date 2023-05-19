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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//Aquí importamos FormsModule para que funcione la sección del formulario en iniciar sesión
//Más info en https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=38&codigo=38&inicio=20
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LenguajesComponent,
    HobbiesComponent,
    ExperienciasComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //configuraciones para los círculos en la sección de lenguajes
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
