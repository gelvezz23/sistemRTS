import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormularioDosComponent } from './pages/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from './pages/formulario-tres/formulario-tres.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'form2', component: FormularioDosComponent },
  { path: 'form3', component: FormularioTresComponent },
  { path: 'info', component: InfoComponent },
];
