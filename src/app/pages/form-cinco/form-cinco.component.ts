import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cinco',
  standalone: true,
  imports: [],
  templateUrl: './form-cinco.component.html',
  styleUrl: './form-cinco.component.scss',
})
export class FormCincoComponent {
  constructor(private router: Router) {}

  public handleRedirect() {
    this.router.navigate(['form5']);
  }
}
