import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
    }
    button{
      margin-top:20px;
    }
  `]
})
export class LoginComponent  {

  loginInput:Auth = {
    id:'',
    usuario:''
  }

  hayError:boolean = false;


  

  constructor(  private router:Router,
                private authService: AuthService) { }

  login(){
    //ir al backend
    //un usuario

    this.authService.setLogin(this.loginInput)
    this.authService.login()
      .subscribe({
        error:()=>{ 
          this.authService.resetLogin(); 
          this.hayError = true},
        next:(resp)=>{
          if(resp.id && resp.usuario.toUpperCase() === this.loginInput.usuario.toUpperCase()){
            this.router.navigate(['/birds']);
          }
        }
      })
  }


}
