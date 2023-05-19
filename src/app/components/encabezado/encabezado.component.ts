import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("", "", "",);//lo ponemos vacío para que no me ponga ningún valor,
  //ya que tiene que venir del back-end

  //Boolean verificando si no está logueado
  isLogged = false;

  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    //susbcribe escucha siempre que el observable hace un cambio, entonces provoca una
    //respuesta o algo. En este caso lo escucha al data y lo pasa al personaService
    //y el personaSerrvice lo pasa al back
    this.personaService.getPersona().subscribe(data => { this.persona = data });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(){
     sessionStorage.clear();
     alert("¿Aceptas cerrar sesion?");
     location.reload();
    
  }

    login(){
      this.router.navigate(['/login']);
    }
}
