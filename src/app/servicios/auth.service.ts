import { Injectable } from '@angular/core';
import { SqlService } from './sql.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public isAuthenticated: boolean = false;
  isAuthenticated = new Subject<boolean>();
  isAuthenticated_forGuard:boolean = false

  guardia_isAuthenticated = new Subject<boolean>();
  guardia_isAuthenticated_forGuard:boolean = false 
  public id_login
  public correo_usuario
  constructor(
    private sqlService:SqlService
  ) { 
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isAuthenticated.next(false);
  }

  login(user:string, pass:string): Promise<boolean> {
    return new Promise((resolve, reject) => {
       this.sqlService.postData("count",{
        "correo":user,
        "pass":pass,
      })
      .subscribe(data=>{
        if(data[0].resp=="Si"){
          this.id_login = data[0].id_login
          this.correo_usuario = data[0].correo
          if(data[0].tipo !== 'G'){
            this.isAuthenticated_forGuard = true;
            this.isAuthenticated.next(true);
          }else{
            this.guardia_isAuthenticated_forGuard = true;
            this.guardia_isAuthenticated.next(true);
          }

          resolve (true)
        }else{
          this.logout()
          resolve (false)
        }
      })
    })
  }

  logout() {
    // lógica de cierre de sesión
    this.isAuthenticated.next(false);
    this.isAuthenticated_forGuard = false;
    this.id_login = ""
    this.correo_usuario = ""
  }

  Authenticated() {
    return this.isAuthenticated;
  }
}
