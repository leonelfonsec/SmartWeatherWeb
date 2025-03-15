import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  imports: [NgIf] ,
  standalone: true,
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  mensajeGuardado: boolean = false;
guardarConfiguracion() {
  this.mensajeGuardado = true;

  // Ocultar el mensaje después de 3 segundos
  setTimeout(() => {
    this.mensajeGuardado = false;
  }, 3000);
}
toggleConfiguracion(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  const content = document.getElementById('configuracion-content');
  if (checkbox.checked) {
    content?.classList.remove('disabled');
  } else {
    content?.classList.add('disabled');
  }
}
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
