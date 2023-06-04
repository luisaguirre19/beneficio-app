import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SqlService } from 'src/app/servicios/sql.service';
import { DatosQrComponent } from "../datos-qr/datos-qr.component";

@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.component.html',
  styleUrls: ['./guardia.component.css']
})
export class GuardiaComponent {
  id
  respuesta
  constructor(
    private sqlService:SqlService,
    private dialog: MatDialog
  ){  }

  onSubmit(){
    const dialogRef = this.dialog.open(DatosQrComponent,{
      data: {info: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.id =""
    });
  }



}
