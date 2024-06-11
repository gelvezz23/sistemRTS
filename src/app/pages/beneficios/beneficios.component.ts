import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss',
})
export class BeneficiosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['felicitaciones']);
  }
}
