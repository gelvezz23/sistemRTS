import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FormularioComponent, FormularioComponent],
})
export class HomeComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['form']);
  }
}
