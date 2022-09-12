import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginInput:Auth = {
    id:'',
    usuario:''
  }

  hayError:boolean = false;
  mensaje:string ='';

  hide = true;


  constructor(  private router:Router,
                private authService: AuthService) { }

  login(){
    //ir al backend
    //un usuario
    if(!(this.loginInput.id && this.loginInput.usuario)){
      this.messageGeneralForm('Campos vacios')
    }
    this.authService.setLogin(this.loginInput)
    this.authService.login()
      .subscribe({
        error:()=>{ 
          this.authService.resetLogin(),
          this.messageGeneralForm('Usuario o contraseña no válido')},
        next:(resp)=>{
          if(resp.id && resp.usuario.toUpperCase() === this.loginInput.usuario.toUpperCase()){
            this.router.navigate(['/birds']);
          }
        }
      })
  }

  messageGeneralForm(message:string){
    this.hayError = true;
    this.mensaje = message;
  }

  goToRegister(){
    this.router.navigate(['./auth/registro'])
  }


}
