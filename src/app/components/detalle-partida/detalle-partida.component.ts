import { Component, computed, inject } from '@angular/core';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-detalle-partida',
  standalone: true,
  imports: [],
  templateUrl: './detalle-partida.component.html',
  styleUrl: './detalle-partida.component.scss'
})
export class DetallePartidaComponent {
  salaService = inject(SalaService)

  vidasP1 = computed(()=> new Array(this.salaService.jugador1().vidas))
  vidasP2 = computed(()=> new Array(this.salaService.jugador2().vidas))
}
