import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  //ocultando password
  hide = true;

  newUser:Auth = {
    id:'',
    email:'',
    usuario:''
  }

  emailnoValido:boolean = true;
  passwordnoValido:boolean = false;


  constructor(  private _authService:AuthService,
                private router:Router) { }

  ngOnInit(): void {
  }

  onNewUser(){
    //validandoEmail
    this.validEmail();
    //validandoPassword
    this.validPassword()
    if((this.newUser.id === '')||(this.newUser.usuario === '')||(this.newUser.email === '') ){
      return;
    }
    this._authService.registerUser(this.newUser)
      .subscribe(resp =>{
        this.router.navigate(['./auth/login']);
      });

  }

  validEmail(){
    let val = false;

    if(this.newUser.email !== undefined){
      //regex
      const REGEX = /[a-zA-Z0-9._-]+@[a-zA-Z._-]+\.[a-zA-Z]+/g;
      let resultRegexEmail = REGEX.test(this.newUser.email!)?true : false;
      if(!resultRegexEmail && this.newUser.email!.trim().length >0){

        val = true;
        this.emailnoValido = true;
        //lo dejo vacio pra que salte el error
        this.newUser.email = '';
      }
    }
    return val;
  }

  validPassword(){
    let val = false;

    const REGEX = /[a-zA-Z1-9]{8}/g;
    let resutlRegexPassword = REGEX.test(this.newUser.id)?true : false;
    if(!resutlRegexPassword){
      val = true;
      this.passwordnoValido = true;
      this.newUser.id='';
    }
    return val;
  }


}


