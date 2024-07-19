import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';

@Component({
  selector: 'app-ayudanos',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/ayudanos/ayudanos.component.html',
  styleUrl: './../../../../Presentation/pages/ayudanos/ayudanos.component.scss',
  imports: [NavbarBgBlackComponent],
})
class AyudanosComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['encuesta']);
  }
}

export default AyudanosComponent;
