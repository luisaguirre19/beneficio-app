import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  onSubmit() {
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Iniciar sesión exitoso, redirigir a la página de inicio
    } else {
      // Mostrar un mensaje de error o realizar alguna otra acción
    }
  }
}
