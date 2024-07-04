import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { CambiarNombreComponent } from './pages/cambiar-nombre/cambiar-nombre.component';
import { necesitaNombreGuard } from './guards/necesita-nombre.guard';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [necesitaNombreGuard]
  },
  {
    path: "jugar",
    component: JugarComponent,
    canActivate: [necesitaNombreGuard],
  },
  {
    path: "jugar/:id",
    component: JugarComponent,
    canActivate: [necesitaNombreGuard],
  },
  {
    path: "jugar-privada",
    component: JugarComponent,
    canActivate: [necesitaNombreGuard],
    data: {esPrivada:true}
  },
  {
    path: "cambiar-nombre",
    component: CambiarNombreComponent
  }
];
