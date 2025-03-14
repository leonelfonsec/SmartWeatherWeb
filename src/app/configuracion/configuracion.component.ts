import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  imports: [],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
confirmLogout() {
  const confirmed = confirm('¿Estás seguro de que deseas cerrar sesión?');
  if (confirmed) {
    this.router.navigate(['/iniciar-sesion']);
  }
}
activarSesion() {
  this.router.navigate(['/sesiones']);
}
configuracion() {
  this.router.navigate(['/configuracion']);
}
  constructor(private router: Router) {}
  home() {
    this.router.navigate(['/home']);
  }
  toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar?.classList.toggle('active');
    overlay?.classList.toggle('active');
  }

}
