import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar';
import { FormatedURLService } from 'app/Infraestructure/formatedURL/formated-url.service';
import { HttpClientModule } from '@angular/common/http';
import { URL } from './constants';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/beneficios/beneficios.component.html',
  styleUrl:
    './../../../../Presentation/pages/beneficios/beneficios.component.scss',
  imports: [NavbarComponent, HttpClientModule],
})
class BeneficiosComponent implements OnInit {
  URL: string = URL;
  constructor(
    private router: Router,
    private serviceParametrization: FormatedURLService
  ) {}

  ngOnInit(): void {
    this.serviceParametrization.getFormatedURL().subscribe({
      next: (response) => {
        if (response) {
          const { URL3 } = response;
          this.URL = URL3;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public handleClick() {
    this.router.navigate(['felicitaciones']);
  }
}

export default BeneficiosComponent;
