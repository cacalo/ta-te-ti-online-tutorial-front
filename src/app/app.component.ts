import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotoneraComponent } from "./components/botonera/botonera.component";
import { ServerService } from './services/server.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BotoneraComponent]
})
export class AppComponent {
  title = 'ta-te-ti-online-en-vivo';

  serverService = inject(ServerService);
}
