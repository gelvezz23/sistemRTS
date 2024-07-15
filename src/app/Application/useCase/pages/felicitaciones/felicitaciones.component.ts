import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar';

@Component({
  selector: 'app-felicitaciones',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/felicitaciones/felicitaciones.component.html',
  styleUrl:
    './../../../../Presentation/pages/felicitaciones/felicitaciones.component.scss',
  imports: [NavbarComponent],
})
class FelicitacionesComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['ayudanos']);
  }
}

export default FelicitacionesComponent;
