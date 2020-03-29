import { LoginGuardService } from './_service/login-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoComponent } from './pages/plato/plato.component';
import { PlatoEdicionComponent } from './pages/plato/plato-edicion/plato-edicion.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { Not403Component } from './pages/not403/not403.component';


const routes: Routes = [
  {path: 'plato', component: PlatoComponent, children: [
    {path: 'nuevo', component: PlatoEdicionComponent},
    {path: 'edicion/:id', component: PlatoEdicionComponent},
    ], canActivate: [LoginGuardService]  // Permite dar seguridad a una pagina que no se quiere ver si no esta algun usuario logueado
  },
  {path: 'consumo', component: ConsumoComponent, canActivate: [LoginGuardService]},
  {path: 'consulta', component: ConsultaComponent, canActivate: [LoginGuardService]},
  {path: 'reporte', component: ReporteComponent, canActivate: [LoginGuardService]},
  {path: 'cliente', component: ClienteComponent, canActivate: [LoginGuardService]},
  {path: 'perfil', component: PerfilComponent, canActivate: [LoginGuardService]},
  {path: 'not-403', component: Not403Component},
  {path: 'login', component: LoginComponent},
  // PAgina que carga por defecto
  {path:  '', redirectTo: 'login', pathMatch: 'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
