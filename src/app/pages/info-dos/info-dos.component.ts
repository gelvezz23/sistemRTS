import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-dos',
  standalone: true,
  imports: [],
  templateUrl: './info-dos.component.html',
  styleUrl: './info-dos.component.scss',
})
export class InfoDosComponent {
  constructor(private router: Router) {}
  public handleClick() {
    this.router.navigate(['form']);
  }
}
