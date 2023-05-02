import { Component } from '@angular/core';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent {
  constructor(
    private sqlService:SqlService
  ) { }
  tableData
  displayedColumns: string[] = ['id_login', 'correo', 'productor', 'nombres', 'apellidos', 'telefono','fecha_ingreso', 'actions'];

 
  ngOnInit() {
    this.traer_datos()

  }


  traer_datos(){
     this.sqlService.getData("productores").subscribe(resp=>{
      this.tableData = resp
    })
  }

  desactivar_cuenta(id:number){
    this.sqlService.putData("count","id_usuario",id,"estado","R").subscribe((resp)=>{
      this.traer_datos()
    })
  }
}
