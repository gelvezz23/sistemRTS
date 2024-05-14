import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormularioDosComponent } from './pages/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from './pages/formulario-tres/formulario-tres.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoDosComponent } from './pages/info-dos/info-dos.component';
import { InfoTresComponent } from './pages/info-tres/info-tres.component';
import { FormCuatroComponent } from './pages/form-cuatro/form-cuatro.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'form2', component: FormularioDosComponent },
  { path: 'form3', component: FormularioTresComponent },
  { path: 'form4', component: FormCuatroComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info2', component: InfoDosComponent },
  { path: 'info3', component: InfoTresComponent },
];
