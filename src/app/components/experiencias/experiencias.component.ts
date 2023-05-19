import { Component, OnInit } from '@angular/core';
import { ExperienciaModel } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  expe: ExperienciaModel[] = []; //Un array vacío

  //Ponemos el token para saber si está logueado; si lo está prodrá hacer cambios sino nop...
  constructor(private expeService: ExperienciaServiceService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    //Con esto cargamos previamente las experiencias
    this.cargarExperiencia();
    //Acá verificamos si está logueado o no
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  //Acá vamos a preparar para cargar las experiencias
  cargarExperiencia(): void {
    this.expeService.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expeService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
