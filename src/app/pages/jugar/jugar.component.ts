import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { UsuarioService } from '../../services/usuario.service';
import { TableroComponent } from '../../components/tablero/tablero.component';
import { DetallePartidaComponent } from '../../components/detalle-partida/detalle-partida.component';
import { SalaService } from '../../services/sala.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalFullscreenComponent } from "../../components/modal-fullscreen/modal-fullscreen.component";
import { EstadoJuego } from '../../interfaces/sala';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [RouterModule, TableroComponent, DetallePartidaComponent, ModalFullscreenComponent],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss',
})
export class JugarComponent implements OnInit {

  serverService = inject(ServerService);
  usuarioService = inject(UsuarioService);
  salaService = inject(SalaService)
  esPrivada = input();
  id = input<string>();
  estadosConModal:EstadoJuego[] = ["ABANDONADO","EMPATE","ESPERANDO_COMPAÑERO","VICTORIA_FINAL_P1","VICTORIA_FINAL_P2","VICTORIA_P1","VICTORIA_P2"];
  mostrarModal = computed(()=> this.estadosConModal.includes(this.salaService.estado()));
  estadoAnterior = signal<EstadoJuego>("ESPERANDO_COMPAÑERO");
  cambiarEstadoAnterior = effect(()=> {
    if(this.salaService.estado()){
      setTimeout(()=>this.estadoAnterior.set(this.salaService.estado()),1000),
      {allowSignalWrites:true}
    }
  });
  linkCopiado = signal<boolean>(false);


  ngOnInit(): void {
    if(!this.esPrivada() && !this.id()){
      this.salaService.crearSala();
    } else if(this.id()) {
      console.log("Intentando unirse a la sala",this.id())
      this.salaService.unirseASala(parseInt(this.id()!));
    } else {
      this.salaService.crearSala(true);
    }
  }

  nuevaRonda(){
    this.salaService.nuevaRonda();
  }

  copiarLink(){
    navigator.clipboard.writeText("localhost:4200/jugar/"+this.salaService.id());
    this.linkCopiado.set(true);
    setTimeout(()=> this.linkCopiado.set(false),2000);
  }

}
