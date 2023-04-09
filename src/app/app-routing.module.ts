import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from './componentes/login/login.component';
import { SolInscripcionComponent } from './componentes/sol-inscripcion/sol-inscripcion.component';
import { SolCuentaComponent } from './componentes/sol-cuenta/sol-cuenta.component';
import { EnviosComponent } from './componentes/envios/envios.component';
import { ProductoresComponent } from './componentes/productores/productores.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sol-inscripcion',
    component: SolInscripcionComponent
  },
  {
    path: 'sol-cuenta',
    component: SolCuentaComponent
  },
  {
    path: 'envios',
    component: EnviosComponent
  },
  {
    path: 'productores',
    component: ProductoresComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
