import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { NavbarComponent } from '../../components/navbar';

@Component({
  selector: 'app-info-tres',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/info-tres/info-tres.component.html',
  styleUrl:
    './../../../../Presentation/pages/info-tres/info-tres.component.scss',
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
