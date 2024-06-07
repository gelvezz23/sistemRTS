import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormularioDosComponent } from './pages/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from './pages/formulario-tres/formulario-tres.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoDosComponent } from './pages/info-dos/info-dos.component';
import { InfoTresComponent } from './pages/info-tres/info-tres.component';
import { FormCuatroComponent } from './pages/form-cuatro/form-cuatro.component';
import { FormCincoComponent } from './pages/form-cinco/form-cinco.component';
import { FormSeisComponent } from './pages/form-seis/form-seis.component';
import { ResultadoFormalizacionComponent } from './pages/resultado-formalizacion/resultado-formalizacion.component';
import { FelicitacionesComponent } from './pages/felicitaciones/felicitaciones.component';
import { FormSieteComponent } from './pages/form-siete/form-siete.component';
import { DescubreComponent } from './pages/descubre/descubre.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'form2', component: FormularioDosComponent },
  { path: 'form3', component: FormularioTresComponent },
  { path: 'form4', component: FormCuatroComponent },
  { path: 'form5', component: FormCincoComponent }, //hu20.2
  { path: 'form7', component: FormSieteComponent }, //20.1
  { path: 'form6', component: FormSeisComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info2', component: InfoDosComponent },
  { path: 'info3', component: InfoTresComponent },
  { path: 'resultado1', component: ResultadoFormalizacionComponent },
  { path: 'felicitaciones', component: FelicitacionesComponent },
  { path: 'descubre', component: DescubreComponent },
  { path: 'beneficio', component: BeneficiosComponent },
];
