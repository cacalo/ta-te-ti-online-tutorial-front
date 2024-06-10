import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  server = io("localhost:3000",{autoConnect:false});

  constructor() {
    this.server.on("connect", ()=> {
      console.log("Conectado al back")
    });
    this.server.connect();
   }
}
