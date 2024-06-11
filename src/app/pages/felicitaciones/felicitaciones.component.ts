import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felicitaciones',
  standalone: true,
  imports: [],
  templateUrl: './felicitaciones.component.html',
  styleUrl: './felicitaciones.component.scss',
})
export class FelicitacionesComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['encuesta']);
  }
}
