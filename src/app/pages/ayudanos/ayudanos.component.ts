import { Component } from '@angular/core';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayudanos',
  standalone: true,
  templateUrl: './ayudanos.component.html',
  styleUrl: './ayudanos.component.scss',
  imports: [NavbarTwoComponent],
})
export class AyudanosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['encuesta']);
  }
}
