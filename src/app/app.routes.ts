import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "jugar",
    component: JugarComponent
  }
];
