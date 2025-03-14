import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms'; // Importar FormsModule


@Component({
  selector: 'app-alarmas-activas',
  standalone: true,
  imports: [CommonModule,MatSlideToggleModule,FormsModule],
  templateUrl: './alarmas-activas.component.html',
  styleUrl: './alarmas-activas.component.scss'
})
export class AlarmasActivasComponent {
  menuOpen = false;

  alarmas = [
    { nombre: 'Alarma uno', hora: '05:00 AM', frecuencia: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], estado: true },
    { nombre: 'Alarma bicicleta', hora: '06:15 AM', frecuencia: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], estado: false },
    { nombre: 'Alarma trabajo', hora: '07:00 AM', frecuencia: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], estado: false }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  toggleAlarma(alarma: any): void {
    alarma.estado = !alarma.estado; // Invierte el estado
    console.log(`Alarma ${alarma.nombre} ahora está ${alarma.estado ? 'activa' : 'inactiva'}`);
  }
  

  eliminarAlarma(alarma: any) {
    this.alarmas = this.alarmas.filter(a => a !== alarma);
  }
}

