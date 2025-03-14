import { Routes } from '@angular/router';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { HomeComponent } from './home/home.component';
import { SesionesActivasComponent } from './sesiones-activas/sesiones-activas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AlarmasActivasComponent } from './alarmas-activas/alarmas-activas.component';


export const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' }, // Redirige a la pantalla de inicio de sesión
  { path: 'iniciar-sesion', component: IniciarsesionComponent }, // Ruta de Iniciar Sesión
  { path: 'home', component: HomeComponent },
  { path: 'sesiones', component: SesionesActivasComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'alarmas-activas', component: AlarmasActivasComponent } // Nueva ruta
];

