import { inject, Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { UsuarioService } from './usuario.service';
import { CrearSalaArgs } from '../interfaces/crearSala';
import { UnirseASalaCrearSalaArgs } from '../interfaces/unirseASala';
import { SalaBackend } from '../interfaces/sala';
import { SalaService } from './sala.service';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  server = io(environment.SERVER_URL,{autoConnect:false});
  usuarioService = inject(UsuarioService);

  actualizacionDeSala$ = new Subject<SalaBackend>();

  constructor() {
    this.server.on("connect", ()=> {
      //console.log("Conectado al back")
    });
    this.server.on("sala",(args)=> {
      this.actualizacionDeSala$.next(args)
    })
    this.server.connect();
   }
}
