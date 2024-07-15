import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/beneficios/beneficios.component.html',
  styleUrl:
    './../../../../Presentation/pages/beneficios/beneficios.component.scss',
  imports: [NavbarComponent],
})
class BeneficiosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['felicitaciones']);
  }
}

export default BeneficiosComponent;
