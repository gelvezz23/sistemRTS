import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two';
@Component({
  selector: 'app-resultado-formalizacion',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/resultado-formalizacion/resultado-formalizacion.component.html',
  styleUrl:
    './../../../../Presentation/pages/resultado-formalizacion/resultado-formalizacion.component.scss',
  imports: [NavbarTwoComponent],
})
class ResultadoFormalizacionComponent {
  formalizado = window.JSON.parse(
    window.localStorage.getItem('negocio_esta_formalizado') || ''
  );
  count = 0;
  public getResultTotal() {
    this.formalizado.forEach((items: { value: string }) => {
      if (items.value === 'si' || items.value === '') {
        this.count++;
      }
    });
  }

  constructor(private router: Router) {
    this.getResultTotal();
    console.log(this.count);
    console.log(this.formalizado);
  }

  public handleClick() {
    this.router.navigate(['info3']);
  }
}
export default ResultadoFormalizacionComponent;
