import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Si estás usando Angular standalone components
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  forecast = [
    { name: 'Lunes', min: 11, max: 20, avg: 15 },
    { name: 'Martes', min: 12, max: 20, avg: 16 },
    { name: 'Miércoles', min: 11, max: 19, avg: 15 },
    { name: 'Jueves', min: 11, max: 19, avg: 15 },
    { name: 'Viernes', min: 11, max: 20, avg: 16 }
  ];
}
