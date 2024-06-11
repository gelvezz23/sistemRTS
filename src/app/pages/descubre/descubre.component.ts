import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descubre',
  standalone: true,
  imports: [],
  templateUrl: './descubre.component.html',
  styleUrl: './descubre.component.scss',
})
export class DescubreComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['/']);
  }
}
