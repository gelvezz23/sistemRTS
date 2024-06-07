import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resultado-formalizacion',
  standalone: true,
  imports: [],
  templateUrl: './resultado-formalizacion.component.html',
  styleUrl: './resultado-formalizacion.component.scss',
})
export class ResultadoFormalizacionComponent {
  formalizado = JSON.parse(
    localStorage.getItem('negocio_esta_formalizado') || ''
  );
  count = 0;
  public getResultTotal() {
    this.formalizado.forEach((items: { value: string }) => {
      if (items.value === 'si') {
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
