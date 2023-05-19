import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';

const routes: Routes = [
  {path:'',component:HomeComponent}, //en situación normal la página comienza a cargarse por aquí "home"
  {path:'login',component:LoginComponent},//Aquí al llamar la url de login llamará a este componente 
  {path:'nuevaExpe',component:NewExperienciaComponent},
  {path:'editExp/:id',component:EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
