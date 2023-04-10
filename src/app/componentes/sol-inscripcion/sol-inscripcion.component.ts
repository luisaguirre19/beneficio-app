import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/interfaces/user';
import { SqlService } from 'src/app/servicios/sql.service';

@Component({
  selector: 'app-sol-inscripcion',
  templateUrl: './sol-inscripcion.component.html',
  styleUrls: ['./sol-inscripcion.component.css']
})



export class SolInscripcionComponent {

  constructor(
    private sqlService:SqlService
  ) { }
  tableData
  displayedColumns: string[] = ['id_login', 'correo', 'productor', 'nombres', 'apellidos', 'telefono','fecha_ingreso', 'actions'];

 
  ngOnInit() {
    this.traer_datos()

  }


  traer_datos(){
     this.sqlService.getData().subscribe(resp=>{
      this.tableData = resp
    })
  }
  
    

}


