import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit {

  private baseUrl:string = environment.baseUrl;
  private _auth:Auth | undefined;

  get auth(){
    return {...this._auth!}
  }

  constructor( private http:HttpClient) { 
    this.getLoginById(localStorage.getItem('tokem'));
  }

  ngOnInit(): void {
  
  }


  verificacionAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('tokem')){
      return of(false);
    }
    return of(true);
  }
  
  login(){
    return this.http.get<Auth>(`${this.baseUrl}/user/${this._auth?.id}`)
    //aqui tengo el auth  y lo puedo almacenar en la propiedad
      .pipe(
        tap( auth => {
          if(auth.id){
            localStorage.setItem('tokem', auth.id);
            this._auth = auth;
          }
        })
      );
  }

  setLogin(log:Auth){
    this._auth = log;
  }

  resetLogin(){
    this._auth = {
      id:'',
      usuario:''
    }
  }

  getLoginById(id:any){
    if(localStorage.getItem('tokem')){
      this.http.get<Auth>(`${this.baseUrl}/user/${id}`)
        .subscribe(resp => {
          this._auth = resp;
        })
    }
  }

  logout(){
    this._auth = undefined;
    localStorage.removeItem('tokem')
  }

  registerUser(user:Auth):Observable<Auth>{


    return this.http.post<Auth>(`${this.baseUrl}/user`, user);
  }

  // agregarBird(bird:Bird):Observable<Bird>{
  //   return this.http.post<Bird>(`${this.baseUrl}/birds`, bird)
  // }
  

}
