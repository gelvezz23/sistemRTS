import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss',
  imports: [NavbarTwoComponent, NavbarComponent],
})
export class BeneficiosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['felicitaciones']);
  }
}
