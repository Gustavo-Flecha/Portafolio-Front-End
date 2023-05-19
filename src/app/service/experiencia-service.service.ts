import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaModel } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class  ExperienciaServiceService {
  expURL = 'http://localhost:8080/explab/'

  constructor(private httpClient: HttpClient) { }

  // Ponemos Experiencia en un array porque habrá varias experiencias "[]"
  public lista(): Observable<ExperienciaModel[]> {
    return this.httpClient.get<ExperienciaModel[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaModel> {
    return this.httpClient.get<ExperienciaModel>(this.expURL + `detail/${id}`);
  }
  //Aquí con experiencia le pasamos un objeto para crear un nuevo registro en la base de datos
  public save(experiencia: ExperienciaModel): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }
  // Para actualizar
  public update(id:number,experiencia:ExperienciaModel):Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`,experiencia);//Le pasamos el objeto experiencia
    // para que actualice
  }
  //Para borrar
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any> (this.expURL + `delete/${id}`);
  }
}
