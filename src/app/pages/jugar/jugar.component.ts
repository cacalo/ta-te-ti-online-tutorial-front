import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { CrearSalaArgs } from '../../interfaces/crearSala';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss'
})
export class JugarComponent {

  serverService = inject(ServerService);
  usuarioService = inject(UsuarioService);

  constructor(){
    const args:CrearSalaArgs = {
      publica: true,
      nombreJugador: this.usuarioService.nombre()
    }
    this.serverService.server.emitWithAck("crearSala",args).then(res => {
      console.log("Crear sala", res)
    })
  }

}
