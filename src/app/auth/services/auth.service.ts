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

  get auth(){
    return {...this._auth!}
  }

  constructor( private http:HttpClient) { }


  verificacionAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('tokem')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/user/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      );
  }
  
  login(){
    return this.http.get<Auth>(`${this.baseUrl}/user/1`)
    //aqui tengo el auth  y lo puedo almacenar en la propiedad
      .pipe(
        tap( auth => this._auth = auth),
        tap( auth => localStorage.setItem('tokem', auth.id)),
      );
  }

  logout(){
    this._auth = undefined;
  }
}
