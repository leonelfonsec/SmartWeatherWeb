import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.scss'] // ⚠️ Corregido: "styleUrl" → "styleUrls"
})
export class IniciarsesionComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    console.log("Navegando a Home..."); // 🔍 Verifica en la consola si se ejecuta esta línea
    this.router.navigate(['/home']);
  }
}
