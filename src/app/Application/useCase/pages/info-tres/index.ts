import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { NavbarComponent } from '../../components/navbar';
import { URL } from './constants';
import { FormatedURLService } from 'app/Infraestructure/formatedURL/formated-url.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-info-tres',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/info-tres/info-tres.component.html',
  styleUrl:
    './../../../../Presentation/pages/info-tres/info-tres.component.scss',

  imports: [NavbarComponent, ModalComponent, HttpClientModule],
})
export class InfoTresComponent implements OnInit {
  URL = URL;
  constructor(
    private router: Router,
    private serviceParametrization: FormatedURLService
  ) {}

  ngOnInit(): void {
    this.serviceParametrization.getFormatedURL().subscribe({
      next: (response) => {
        if (response) {
          const { URL1 } = response;
          this.URL = URL1;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public redirectFormCuatro() {
    this.router.navigate(['form4']);
  }

  public redirectOthepath() {
    this.router.navigate(['form']);
  }
}
