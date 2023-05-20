import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from './componentes/login/login.component';
import { SolInscripcionComponent } from './componentes/sol-inscripcion/sol-inscripcion.component';
import { SolCuentaComponent } from './componentes/sol-cuenta/sol-cuenta.component';
import { EnviosComponent } from './componentes/envios/envios.component';
import { ProductoresComponent } from './componentes/productores/productores.component';
import { AuthGuard } from './guards/auth.guard';
import { EstadoCuentaComponent } from './componentes/estado-cuenta/estado-cuenta.component';
import { GuardiaComponent } from './componentes/guardia/guardia.component';

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
    component: SolInscripcionComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'sol-cuenta',
    component: SolCuentaComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'envios',
    component: EnviosComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'productores',
    component: ProductoresComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'estado-cuenta',
    component: EstadoCuentaComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'guardia',
    component: GuardiaComponent,
    canActivate: [AuthGuard] 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
