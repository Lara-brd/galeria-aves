import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  private _auth:Auth | undefined;

  public get auth(){
    return {...this._auth!}
  }

  public set authUser(value:Auth){
    this._auth = value
  }

  constructor( private http:HttpClient) { }


  verificacionAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('tokem')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/user/${this.auth.id}`)
    // return this.http.get<Auth>(`${this.baseUrl}/user/1122`)
      .pipe(
        map(auth => {
          if(!auth.id){
            return false;
          }
          return true;
        })
      );
  }
  
  login(){
    return this.http.get<Auth>(`${this.baseUrl}/user/${this.auth.id}`)

    //aqui tengo el auth  y lo puedo almacenar en la propiedad
      .pipe(
        tap( auth => this._auth = auth),
        tap( auth => localStorage.setItem('tokem', auth.id)),
      );
  }

  setLogin(value:Auth){
    this._auth = value;
  }


  logout(){
    this._auth = undefined;
  }

}
