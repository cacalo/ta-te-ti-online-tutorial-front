import { Component, computed, inject } from '@angular/core';
import { SalaService } from '../../services/sala.service';
import { POSICION_TABLERO } from '../../interfaces/sala';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent {

  salaService = inject(SalaService);
  esMiTurno = computed(()=> 
    (this.salaService.estado() === "TURNO_P1" && this.salaService.numeroDeJugador() === 1) || 
    (this.salaService.estado() === "TURNO_P2" && this.salaService.numeroDeJugador() === 2));

    jugar(posicion:POSICION_TABLERO){
      this.salaService.jugar(posicion);
    }
}
