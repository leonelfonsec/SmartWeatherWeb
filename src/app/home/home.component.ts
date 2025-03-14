import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
configuracion() {
  this.router.navigate(['/configuracion']);
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
