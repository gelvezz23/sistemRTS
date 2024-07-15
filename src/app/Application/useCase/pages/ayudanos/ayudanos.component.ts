import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two';

@Component({
  selector: 'app-ayudanos',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/ayudanos/ayudanos.component.html',
  styleUrl: './../../../../Presentation/pages/ayudanos/ayudanos.component.scss',
  imports: [NavbarTwoComponent],
})
class AyudanosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['encuesta']);
  }
}

export default AyudanosComponent;
