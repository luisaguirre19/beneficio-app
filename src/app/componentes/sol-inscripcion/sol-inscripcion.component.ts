import { Component} from '@angular/core';
import { GeneralService } from 'src/app/servicios/general.service';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-sol-inscripcion',
  templateUrl: './sol-inscripcion.component.html',
  styleUrls: ['./sol-inscripcion.component.css']
})



export class SolInscripcionComponent {

  constructor(
    private sqlService:SqlService,
    private gralService:GeneralService
      ) { }
  tableData
  displayedColumns: string[] = ['id_login', 'correo', 'productor', 'nombres', 'apellidos', 'telefono','fecha_ingreso', 'actions'];

 
  ngOnInit() {
    this.traer_datos()

  }


  traer_datos(element?){
     this.sqlService.getData("count").subscribe(resp=>{
      this.tableData = resp

      if(element){
           this.sqlService.postData("envio_correo", {
          "asunto":"Cuenta autorizada",
          "msg":"Tu cuenta ha sido autorizada.",
          "receptor":element.correo,
          "para":element.nombres + ' ' + element.apellidos
        }).subscribe(re=>{
          alert("se envia correo para notificar al usuario")
        })
      }
    })
  }

  activar_cuenta(element){
    alert(element.correo)
    this.sqlService.putData("count","id_usuario",Number(element.id_login),"estado","A").subscribe((data)=>{
      this.sqlService.postData_productor("login",{"correo":data[0].resp}).subscribe((resp)=>{
  
        this.traer_datos(element)
      }) 
    })
  }
  
  desactivar_cuenta(id:number){
    this.sqlService.putData("count","id_usuario",id,"estado","R").subscribe((resp)=>{
      console.log("regreso " + resp)
      this.traer_datos()
    })
  }

}


