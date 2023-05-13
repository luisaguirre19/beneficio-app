import { Component } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/library';
import * as ZXing from '@zxing/library';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf.worker.entry';
import jsQR from 'jsqr';
import { SqlService } from 'src/app/servicios/sql.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  envios
  displayedColumns: string[] = ['id_cuenta', 'id_envio', 'peso', 'estado', 'vehiculo'];

  constructor(
    private sqlService:SqlService,
    private authService:AuthService,
    private dialog: MatDialog

  ) {}

  ngOnInit() {
    this.traer_datos()

  }
  traer_datos(){
     this.sqlService.getDataProductor('envios_benef').subscribe(resp=>{
      console.log(resp)
      this.envios = resp
    })
  }

  
}
