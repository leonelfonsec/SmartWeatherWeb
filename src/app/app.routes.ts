import { Routes } from '@angular/router';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { HomeComponent } from './home/home.component';
import { AlarmasActivasComponent } from './alarmas-activas/alarmas-activas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' }, // Redirige a la pantalla de inicio de sesión
  { path: 'iniciar-sesion', component: IniciarsesionComponent }, // Ruta de Iniciar Sesión
  { path: 'home', component: HomeComponent },// Ruta de Home
  { path: 'alarmas-activas', component: AlarmasActivasComponent } // Nueva ruta
];

