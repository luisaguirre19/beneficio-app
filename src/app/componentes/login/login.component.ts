import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  log:boolean=false
  constructor(
    private authService:AuthService,
    ){}


  async onSubmit() {
    this.log = await this.authService.login(this.username, this.password)
    if(this.log){
      alert("Bienvenido")
    }else{
      alert("Ingreso no autorizado")
    }
  }


}
