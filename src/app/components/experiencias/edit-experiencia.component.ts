import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaModel } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: ExperienciaModel = null;

  constructor(private ExpeServis: ExperienciaServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id/*el id para que sepa cual es el que va a actualizar*/ = this.activatedRouter.snapshot.params['id'];
    this.ExpeServis.detail(id).subscribe(
      data => {
        this.expLab =   data;
      }, err => { 
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {//creamos el método para actualizar llamado onUpdate (Actualizar en español)
    const id/*el id para que sepa cual es el que va a actualizar*/ = this.activatedRouter.snapshot.params['id'];
    this.ExpeServis.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {//En caso de error tira este mensaje
        alert("Error  al modificar experiencia");
        this.router.navigate([""]);//Aquí nos reevía al index principal
      }
    )
  }

}
