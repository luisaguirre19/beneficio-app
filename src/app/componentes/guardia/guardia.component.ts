import { Component } from '@angular/core';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.component.html',
  styleUrls: ['./guardia.component.css']
})
export class GuardiaComponent {
  id
  respuesta
  constructor(
    private sqlService:SqlService
  ){  }

  onSubmit(){
    console.log("consultamos " + this.id)
    this.sqlService.postData("guardia",{
        "codigo_qr":this.id
     })
     .subscribe(data=>{
      alert(data[0].resp)
        // this.sqlService.postData_beneficio("cuenta",{
        //     "etiqueta":this.etiqueta,
        //     "peso":this.peso,
        //     "parcialidades":this.parcialidad,
        //     "correo":this.authService.correo_usuario,
        //     "id_solicitud_prod":data[0].resp
        // })
        // .subscribe(data=>{
        //})
     })
  }

}
