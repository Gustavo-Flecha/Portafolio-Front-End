import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaModel } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  //Aquí le llamamos al router en el constructor para que nos rediriga a la página 
  //cuando presionamos el botón allá en el html
  constructor(private ExpeServis: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new ExperienciaModel(this.nombreE, this.descripcionE);
    this.ExpeServis.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      },err=>{                        //Si da error hará esto
        alert("Falló la carga de la experiencia");
        this.router.navigate(['']);
      })
    }
  }


