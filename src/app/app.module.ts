import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './componentes/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './componentes/login/login.component';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SolInscripcionComponent } from './componentes/sol-inscripcion/sol-inscripcion.component';
import { SolCuentaComponent } from './componentes/sol-cuenta/sol-cuenta.component';
import { EnviosComponent } from './componentes/envios/envios.component';
import { ProductoresComponent } from './componentes/productores/productores.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // si estás usando ngModel
import { AuthGuard } from './guards/auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { EstadoCuentaComponent } from './componentes/estado-cuenta/estado-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LoginComponent,
    SolInscripcionComponent,
    SolCuentaComponent,
    EnviosComponent,
    ProductoresComponent,
    EstadoCuentaComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
