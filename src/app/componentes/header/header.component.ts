import { Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService:AuthService,
    private router:Router
    ){}

  // @ViewChild('person') btnPerson: MatButton;
  // @ViewChild('solIns') btnSolIns: MatButton;
 // @ViewChild('solCta') btnSolCta: MatButton;
  // @ViewChild('envios') btnEnvios: MatButton;
  // @ViewChild('productores') btnProductores: MatButton;
  log:boolean = false
  log_guardia:boolean = false


  ngOnInit() {
    this.valida_login()
  }
  
  async valida_login(){
    await this.authService.isAuthenticated.subscribe(estado => {
      this.log = estado
      // this.btnPerson.disabled = estado
      // this.btnSolIns.disabled = !estado
      //this.btnSolCta.disabled = !estado
      // this.btnEnvios.disabled = !estado
      // this.btnProductores.disabled = !estado
      if(estado){
        this.router.navigate(['/sol-inscripcion'])
      }else{
        this.router.navigate(['/login'])
      }
    });

    await this.authService.guardia_isAuthenticated.subscribe(estado => {
      this.log_guardia = estado
      if(estado){
        this.router.navigate(['/guardia'])
      }else{
        this.router.navigate(['/login'])
      }
    });
  }

  salida(){
    this.authService.logout()
  }

}
