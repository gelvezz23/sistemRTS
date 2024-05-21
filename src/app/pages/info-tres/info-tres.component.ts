import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-tres',
  standalone: true,
  imports: [],
  templateUrl: './info-tres.component.html',
  styleUrl: './info-tres.component.scss',
})
export class InfoTresComponent {
  constructor(private router: Router) {}

  public redirectFormCuatro() {
    this.router.navigate(['form4']);
  }

  public redirectOthepath() {
    this.router.navigate(['form']);
  }
}
