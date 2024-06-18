import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';
@Component({
  selector: 'app-resultado-formalizacion',
  standalone: true,
  templateUrl: './resultado-formalizacion.component.html',
  styleUrl: './resultado-formalizacion.component.scss',
  imports: [NavbarTwoComponent],
})
export class ResultadoFormalizacionComponent {
  formalizado = JSON.parse(
    localStorage.getItem('negocio_esta_formalizado') || ''
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
