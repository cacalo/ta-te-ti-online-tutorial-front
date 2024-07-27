import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usuarioService = inject(UsuarioService);
  serverService = inject(ServerService)
  router = inject(Router)

  /** Pregunta al servidor si hay una sála pública disponible */
  buscarSalaPublica(){
    this.serverService.server.emitWithAck("encontrarSala").then(res => {
      //console.log(res)
      if(res === null) return this.router.navigate(["/jugar"]);
      return this.router.navigate(["/jugar",res]);
    })
  }
}
