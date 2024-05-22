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
  constructor(private router: Router) {
    this.handleLocalStorage();
  }
  isViewButtonFive = true;
  isPersonaNatural = true;

  public handleRedirect() {
    this.router.navigate(['form5']);
  }
  public handleLocalStorage() {
    const data = localStorage.getItem('caracterizacion_de_negocio');

    const personaNatural = JSON.parse(data || '').titular.value;
    const profesionLiberal = JSON.parse(data || '').negocio.value;

    this.isPersonaNatural =
      personaNatural !== 'persona natural' &&
      profesionLiberal !== 'profesion liberal o artistica';

    this.isViewButtonFive = this.viewButtonFive();
  }

  public viewButtonFive() {
    const data = localStorage.getItem('modelos_hipoteticos');
    const quest = JSON.parse(data || '')[0].quest;

    const answer =
      'Igual o más de 3500 UVT a igual o menos de 30.000 UVT (de $164.727.500 a $1.411.950.000)';
    const valid = quest === answer;
    return valid;
  }

  public viewButtonSeven() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const personaJuridica = JSON.parse(data || '').titular.value;
    return personaJuridica === 'persona juridica';
  }
}
