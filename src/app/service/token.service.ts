import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  roles: Array<string> = [];

  constructor() { }

  // En este método se elimna el token que haya si es que hay y se copia el 
  //token nuevo que está en la variable token
  //Setter de Token
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  //Getter de Token
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }
  //Setter de UserName
  public setUserName(UserName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, UserName);
  }
  //Getter de UserName
  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }
  //Setter de Authorities
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
  //Getter de Authorities
  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)!) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
  public logOut(): void {
    window.sessionStorage.clear();
  }
}
