import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-sol-cuenta',
  templateUrl: './sol-cuenta.component.html',
  styleUrls: ['./sol-cuenta.component.css']
})
export class SolCuentaComponent {
  tableData
  displayedColumns: string[] = ['id_cuenta', 'Etiqueta', 'Peso', 'Parcialidades', 'Estado', 'actions'];

  constructor(
    private sqlService:SqlService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.traer_datos()
  }

  traer_datos(){
    this.sqlService.getDataProductor("cuenta").subscribe(resp=>{
     this.tableData = resp
   })
 }

 activar_cuenta(id){
    this.sqlService.putData_productor("cuenta","id_generico",id,"correo",this.authService.correo_usuario,"estado","Cuenta creada")
    .subscribe(data=>{
          this.traer_datos()
    })

 }

 desactivar_cuenta(id){

 }
}

