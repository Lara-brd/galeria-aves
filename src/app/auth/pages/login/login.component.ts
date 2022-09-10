import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`

    .wrapp{
      height:70vh;
    }
    .box-login{
      padding:50px;
      border-radius:5px;
    }
  `
  ]
})
export class LoginComponent  {

  loginInput = {
    name:'',
    password:''
  }


  

  constructor(  private router:Router,
                private authService: AuthService) { }

  login(){
    //ir al backend
    //un usuario
    this.authService.login()
      .subscribe(resp =>{
        console.log(resp);

        if(resp.id){
          this.router.navigate(['/birds']);
        }
      })
  }



}
