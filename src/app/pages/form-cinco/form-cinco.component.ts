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
    const modeloHipoteticos = JSON.parse(
      localStorage.getItem('modelos_hipoteticos') || ''
    );
    const personaJuridica = JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || ''
    ).titular.value;
    const answer =
      'Más de 4500 a igual o menos de 30.000 UVT (Más de 4500 a igual o menos de 30.000 UVT (Más de $ 211.792.500 a igual o menos de $ 1.411.950.000)';

    const otherAnswer =
      'Igual o más de 1400 UVT a menos de 3500 UVT (de $65.891.000 a $164.727.500)';

    if (personaJuridica === 'persona juridica') {
      return true;
    }
    if (
      answer === modeloHipoteticos[1].quest &&
      personaJuridica === 'persona natural'
    ) {
      return true;
    }
    if (
      modeloHipoteticos[0].quest === otherAnswer &&
      personaJuridica === 'persona natural'
    ) {
      return true;
    }

    if (
      modeloHipoteticos[0].quest ===
        'Igual o más de 3500 UVT a igual o menos de 30.000 UVT (de $164.727.500 a $1.411.950.000)' &&
      personaJuridica === 'persona natural'
    ) {
      return true;
    }

    if (
      modeloHipoteticos[1].quest ===
        'Más de 30.000 UVT (Más de $ 1.411.950.000)' &&
      personaJuridica === 'persona natural'
    ) {
      return true;
    }
    return false;
  }

  public viewButtonEigth() {
    const modeloHipoteticos = JSON.parse(
      localStorage.getItem('modelos_hipoteticos') || ''
    );
    const personaJuridica = JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || ''
    ).titular.value;

    if (personaJuridica === 'persona juridica') {
      return true;
    }

    if (
      personaJuridica === 'persona natural' &&
      modeloHipoteticos[0].quest ===
        'Igual o más de 3500 UVT a igual o menos de 30.000 UVT (de $164.727.500 a $1.411.950.000)'
    ) {
      return true;
    }

    if (
      modeloHipoteticos[1].quest ===
        'Más de 30.000 UVT (Más de $ 1.411.950.000)' &&
      personaJuridica === 'persona natural'
    ) {
      return true;
    }
    return false;
  }

  public viewButtonNine() {
    const caracterizacion = JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || ''
    );

    if (
      caracterizacion.negocio.value === 'comercial' ||
      caracterizacion.negocio.value === 'profesion liberal o artistica'
    ) {
      return true;
    }

    return false;
  }

  public viewButtonTen() {
    const caracterizacion = JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || ''
    );

    const modeloHipoteticos = JSON.parse(
      localStorage.getItem('modelos_hipoteticos') || ''
    );

    if (
      caracterizacion.negocio.value === 'comercial' &&
      modeloHipoteticos[0].quest ===
        'Igual o más de 3500 UVT a igual o menos de 30.000 UVT (de $164.727.500 a $1.411.950.000)'
    ) {
      return true;
    }
    return false;
  }
}
