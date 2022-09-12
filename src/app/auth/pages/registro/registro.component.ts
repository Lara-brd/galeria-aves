import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`
  .wrapp{
      height:70vh;
      margin:10px auto;
      max-width:1000px;      
    }
    .box-login{
      border-radius:5px;
      padding:5%;
      max-width:500px;
      position:relative;
    }
    .error-message{
      position:absolute;
      bottom:5px;
      font-size:.8rem;
    }

    button{
      margin-top:20px;
      margin-bottom:0;
    }
  `]
})
export class RegistroComponent implements OnInit {
  hide = true;

  newUser:Auth = {
    id:'',
    email:'',
    usuario:''
  }

  registered:boolean = false;

  constructor(  private _authService:AuthService,
                private router:Router) { }

  ngOnInit(): void {
  }

  onNewUser(){
    if((this.newUser.id === '')||(this.newUser.usuario === '')||(this.newUser.email === '') ){
      return;
    }

    console.log(this.newUser);
    this._authService.registerUser(this.newUser)
      .subscribe(resp =>{
        this.router.navigate(['./auth/login']);
      });

  }

}
