import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormularioDosComponent } from '../formulario-dos/formulario-dos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FormularioComponent, FormularioDosComponent],
})
export class HomeComponent {}
