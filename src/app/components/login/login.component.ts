import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Estas son condiciones que vamos a preparar para el login
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = []; //lo inicializamos en un array vacío
  errMsj!: string;

  constructor(private tokenService: TokenService,
    private authSevice: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true; //Aquí comprobamos que si trae un token es porque está logueado entonces es true
      this.isLogginFail = false;//Esta es una redundancia pero sirve saber que si funcionó el login queda en false,
      // ahora si falla el login queda en true 
      this.roles = this.tokenService.getAuthorities(); //Aquí decimos que nos guarde en la variable roles lo que 
      //traigas de tokenService.getAauthorities()
    }
  }
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authSevice.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

}
