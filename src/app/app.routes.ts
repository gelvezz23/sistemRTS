import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormularioComponent },
];
