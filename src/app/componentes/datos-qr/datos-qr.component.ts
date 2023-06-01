import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SqlService } from 'src/app/servicios/sql.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-datos-qr',
  templateUrl: './datos-qr.component.html',
  styleUrls: ['./datos-qr.component.css']
})
export class DatosQrComponent {
  id
  datos
  nombres
  apellidos
  marca
  color
  placa
  foto_dpi
  foto_licencia
  foto_perfil
  url_foto

  images: string[] = [];
  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true
    // Otros ajustes de configuración según tus necesidades
  };
  constructor(
    private sqlService:SqlService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DatosQrComponent>
  ) { 
    this.id = data.info
    this.traer_datos(data.info)
  }

  traer_datos(id){
    this.sqlService.postData_productor("get_qr",{
      "codigo_qr":id
   })
   .subscribe(data=>{
    if(data[0].resp == 'No'){
      alert("El codigo no es valido o ya fue utilizado")
      this.dialogRef.close()
    }
      this.nombres = data[0].nombre
      this.apellidos = data[0].apellido
      this.marca = data[0].marca
      this.color = data[0].color
      this.placa = data[0].placa
      this.foto_dpi = data[0].foto_dpi
      this.foto_licencia = data[0].foto_licencia
      this.foto_perfil = data[0].foto_perfil
      this.url_foto = data[0].url_foto
      this.images=[
        this.foto_dpi,
        this.foto_licencia,
        this.foto_perfil,
        this.url_foto
      ]
   })
  }

  Permitir(){
    this.sqlService.postData_productor("actualiza_qr",{
      "codigo_qr":this.id
   })
   .subscribe(data=>{
    alert("Se autoriza el ingreso")
      this.dialogRef.close()
   })
  }

}
