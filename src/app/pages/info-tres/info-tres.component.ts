import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-info-tres',
  standalone: true,
  templateUrl: './info-tres.component.html',
  styleUrl: './info-tres.component.scss',
  imports: [NavbarComponent, ModalComponent],
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
