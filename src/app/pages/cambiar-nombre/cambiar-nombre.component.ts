import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cambiar-nombre',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cambiar-nombre.component.html',
  styleUrl: './cambiar-nombre.component.scss'
})
export class CambiarNombreComponent {

  usuarioService = inject(UsuarioService);
  router = inject(Router)

  cambiarNombreYVolver(nuevoNombre:string){
    this.usuarioService.nombre.set(nuevoNombre);
    this.router.navigate(["/"]);
  }

}
