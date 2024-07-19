import { Routes } from '@angular/router';

import { FormularioDosComponent } from './Application/useCase/pages/formulario-dos';
import { InfoComponent } from './Application/useCase/pages/info';
import { InfoDosComponent } from './Application/useCase/pages/info-dos';
import { FormCuatroComponent } from './Application/useCase/pages/form-cuatro';
import { FormSeisComponent } from './Application/useCase/pages/form-seis';
import { ResultadoFormalizacionComponent } from './Application/useCase/pages/resultado-formalizacion';
import { FormSieteComponent } from './Application/useCase/pages/form-siete';
import { AyudanosComponent } from './Application/useCase/pages/ayudanos';
import { BeneficiosComponent } from './Application/useCase/pages/beneficios';
import { HomeComponent } from './Application/useCase/pages/home';
import { DescubreComponent } from './Application/useCase/pages/descubre';
import { EncuestaComponent } from './Application/useCase/pages/encuesta';
import { FelicitacionesComponent } from './Application/useCase/pages/felicitaciones';
import { FormCincoComponent } from './Application/useCase/pages/form-cinco';
import { InfoTresComponent } from './Application/useCase/pages/info-tres';
import { FormularioComponent } from './Application/useCase/pages/formulario';
import { FormularioTresComponent } from './Application/useCase/pages/formulario-tres';

export const routes: Routes = [
  { path: 'rst', component: HomeComponent },
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
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'ayudanos', component: AyudanosComponent },
];
