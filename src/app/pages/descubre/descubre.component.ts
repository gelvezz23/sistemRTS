import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';

@Component({
  selector: 'app-descubre',
  standalone: true,
  templateUrl: './descubre.component.html',
  styleUrl: './descubre.component.scss',
  imports: [NavbarComponent, NavbarTwoComponent],
})
export class DescubreComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['/']);
  }
}
