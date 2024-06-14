import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-felicitaciones',
  standalone: true,
  templateUrl: './felicitaciones.component.html',
  styleUrl: './felicitaciones.component.scss',
  imports: [NavbarComponent],
})
export class FelicitacionesComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['ayudanos']);
  }
}
