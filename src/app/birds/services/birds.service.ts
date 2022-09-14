import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bird } from '../interfaces/birds.interface.ts/birds.interface';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {


  //variables de entorno - environment
  private baseUrl:string = environment.baseUrl;

  constructor( private http:HttpClient) { }

  
  ///////////peticion
  getBirds():Observable<Bird[]>{
    return this.http.get<Bird[]>(`${this.baseUrl}/birds`)
  }

  getBirdPorId(id:string):Observable<Bird>{
    return this.http.get<Bird>(`${this.baseUrl}/birds/${ id }`);
  }

  getSugerencias( termino:string):Observable<Bird[]>{
    return this.http.get<Bird[]>(`${this.baseUrl}/birds?q=${ termino }&_limit=6`);
  }

  agregarBird(bird:Bird):Observable<Bird>{
    return this.http.post<Bird>(`${this.baseUrl}/birds`, bird)
  }
  
  actualizarBird(bird:Bird):Observable<Bird>{
    return this.http.put<Bird>(`${this.baseUrl}/birds/${bird.id}`, bird)
  }

  borrarBird(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/birds/${id}`)
  }




}
