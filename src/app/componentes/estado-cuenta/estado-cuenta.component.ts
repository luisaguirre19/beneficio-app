import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent {
  name: string;
  age: number;
  peso:number
  parcialidad:number
  etiqueta

  tableData
  displayedColumns: string[] = ['id_cuenta', 'Etiqueta', 'Peso', 'Parcialidades', 'Estado'];
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
}
