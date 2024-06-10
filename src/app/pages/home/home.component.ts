import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
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

}
