import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface SesionActiva {
  dispositivo: string;
  ultimoInicio: string;
  ubicacion: string;
}

@Component({
  selector: 'app-sesiones-activas',
  imports: [
  ],
  templateUrl: './sesiones-activas.component.html',
  styleUrl: './sesiones-activas.component.scss'
})
export class SesionesActivasComponent {
home() {
  this.router.navigate(['/home']);
}
configuracion() {
  this.router.navigate(['/configuracion']);
}
eliminarSesion(_t32: any) {
  const confirmed = confirm('¿Estás seguro de que deseas cerrar sesión?');
}
  activarSesion() {
    this.router.navigate(['/sesiones']);
  }
  constructor(private router: Router) {}

  confirmLogout() {
      const confirmed = confirm('¿Estás seguro de que deseas cerrar sesión?');
      if (confirmed) {
        this.router.navigate(['/iniciar-sesion']);
      }
    }

    toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      sidebar?.classList.toggle('active');
      overlay?.classList.toggle('active');
    }

}
