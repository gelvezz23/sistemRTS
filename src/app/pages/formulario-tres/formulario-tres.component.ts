import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';
@Component({
  selector: 'app-formulario-tres',
  standalone: true,
  templateUrl: './formulario-tres.component.html',
  styleUrl: './formulario-tres.component.scss',
  providers: [CurrencyPipe],
  imports: [DisclaimerComponent, NavbarTwoComponent],
})
export class FormularioTresComponent {
  public cantidad!: string;
  public cantidadDos!: string;
  public cantidadTres!: string;
  public cantidadCuatro!: string;
  public cantidadCinco!: string;
  public cantidadSeis!: string;
  public cantidadSiete!: string;
  public cantidadOcho!: string;
  public cantidadNueve!: string;
  public cantidadDiez!: string;
  public cantidadOnce!: string;
  public cantidadDoce!: string;
  public total!: number;
  public totalDos!: number;

  public answers!: { id: number; value: string; text: string }[];

  constructor(private currencyPipe: CurrencyPipe, private router: Router) {
    this.cantidad = '';
    this.cantidadDos = '';
    this.cantidadTres = '';
    this.cantidadCuatro = '';
    this.cantidadCinco = '';
    this.cantidadSeis = '';
    this.cantidadSiete = '';
    this.cantidadOcho = '';
    this.cantidadNueve = '';
    this.cantidadDiez = '';
    this.cantidadOnce = '';
    this.cantidadDoce = '';
    this.total = 0;
    this.totalDos = 0;

    this.answers = [
      {
        id: 20,
        value: '',
        text: '¿Cuál fue su patrimonio bruto el año anterior?',
      },
      {
        id: 21,
        value: '',
        text: '¿Cuál es su patrimonio bruto del presente año?',
      },
      { id: 22, value: '', text: '¿Ingresos de actividades gravadas con IVA?' },
      {
        id: 23,
        value: '',
        text: 'Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares',
      },
      { id: 24, value: '', text: 'Ingresos Laborales' },
      { id: 25, value: '', text: 'Otros ingresos' },
      { id: 26, value: '', text: 'Total de ingresos brutos' },
      { id: 28, value: '', text: '¿Ingresos de actividades gravadas con IVA?' },
      {
        id: 29,
        value: '',
        text: 'Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares',
      },
      { id: 30, value: '', text: 'Ingresos Laborales' },
      { id: 31, value: '', text: 'Otros ingresos' },
      { id: 32, value: '', text: 'Total de ingresos brutos' },
    ];
  }

  public saveLocalStorage(): void {
    localStorage.setItem('response-Three', JSON.stringify(this.answers));
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.answers.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.answers[questionIndex].value = value;
    }
    this.saveLocalStorage();
  }

  public updateValue(event: any, id: number) {
    let input = event.value || '';
    let val = parseInt(input || '', 10);
    if (Number.isNaN(val)) {
      val = 0;
    }

    if (id === 20) {
      this.cantidad =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';

      this.getAnswer(this.cantidad, id);
    }
    if (id === 21) {
      this.cantidadDos =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadDos, id);
    }

    if (id === 22) {
      this.cantidadTres =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadTres, id);
    }

    if (id === 23) {
      this.cantidadCuatro =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadCuatro, id);
    }

    if (id === 24) {
      this.cantidadCinco =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadCinco, id);
    }
    if (id === 25) {
      this.cantidadSeis =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadSeis, id);
    }

    this.total =
      Number(this.cantidadTres.replace(/\D/g, '')) +
      Number(this.cantidadCuatro.replace(/\D/g, '')) +
      Number(this.cantidadCinco.replace(/\D/g, '')) +
      Number(this.cantidadSeis.replace(/\D/g, ''));

    this.cantidadSiete =
      this.currencyPipe.transform(this.total, 'USD', 'symbol', '1.0-0') || '';

    this.getAnswer(this.cantidadSiete, 26);

    if (id === 28) {
      this.cantidadOcho =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadOcho, id);
    }
    if (id === 29) {
      this.cantidadNueve =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadNueve, id);
    }
    if (id === 30) {
      this.cantidadDiez =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadDiez, id);
    }
    if (id === 31) {
      this.cantidadOnce =
        this.currencyPipe.transform(
          input.replace(/\D/g, '').replace(/^0+/),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(this.cantidadOnce, id);
    }

    this.totalDos =
      Number(this.cantidadOcho.replace(/\D/g, '')) +
      Number(this.cantidadNueve.replace(/\D/g, '')) +
      Number(this.cantidadDiez.replace(/\D/g, '')) +
      Number(this.cantidadOnce.replace(/\D/g, ''));

    this.cantidadDoce =
      this.currencyPipe.transform(this.totalDos, 'USD', 'symbol', '1.0-0') ||
      '';
    this.getAnswer(this.cantidadDoce, 32);
  }

  public filtrarNumero(event: KeyboardEvent) {
    console.log(event.key);
    const allowedKeys =
      /[0-9]|\bDelete\b|\bBackspace\b|[\u2190-\u2193]|\bArrowLeft\b|\bArrowRight\b|\bDelete\b/g;

    if (event.key.match(allowedKeys)) {
      return true; // Permite la entrada
    } else {
      event.preventDefault(); // Evita la entrada
    }
    return;
  }

  public handleClick() {
    this.router.navigate(['form7']);
  }
}
