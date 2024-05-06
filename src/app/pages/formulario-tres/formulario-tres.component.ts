import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tres',
  standalone: true,
  imports: [],
  templateUrl: './formulario-tres.component.html',
  styleUrl: './formulario-tres.component.scss',
})
export class FormularioTresComponent {
  public cantidad!: string;
  public cantidadDos!: string;
  public cantidadTres!: string;
  public cantidadCuatro!: string;
  public cantidadCinco!: string;
  public cantidadSeis!: string;
  public cantidadSiete!: string;
  public total!: number;

  public answers!: { id: number; value: string }[];

  constructor() {
    this.cantidad = '';
    this.cantidadDos = '';
    this.cantidadTres = '';
    this.cantidadCuatro = '';
    this.cantidadCinco = '';
    this.cantidadSeis = '';
    this.cantidadSiete = '';
    this.total = 0;

    this.answers = [
      { id: 20, value: '' },
      { id: 21, value: '' },
      { id: 22, value: '' },
      { id: 23, value: '' },
      { id: 24, value: '' },
      { id: 25, value: '' },
      { id: 26, value: '' },
    ];
  }
  public withoutformat(value: string) {
    return value.replace(/[\$|\,|\.]/g, '');
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
    let val = parseInt(event.value || '', 10);
    if (Number.isNaN(val)) {
      val = 0;
    }

    if (id === 20) {
      this.cantidad = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidad), id);
    }
    if (id === 21) {
      this.cantidadDos = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadDos), id);
    }

    if (id === 22) {
      this.cantidadTres = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadTres), id);
    }

    if (id === 23) {
      this.cantidadCuatro = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadCuatro), id);
    }

    if (id === 24) {
      this.cantidadCinco = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadCinco), id);
    }
    if (id === 25) {
      this.cantidadSeis = formatCurrency(
        val,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadSeis), id);
    }

    this.total =
      Number(this.cantidad.replace(/[\$|\,|\.]/g, '')) +
      Number(this.cantidadDos.replace(/[\$|\,|\.]/g, '')) +
      Number(this.cantidadTres.replace(/[\$|\,|\.]/g, '')) +
      Number(this.cantidadCuatro.replace(/[\$|\,|\.]/g, '')) +
      Number(this.cantidadCinco.replace(/[\$|\,|\.]/g, '')) +
      Number(this.cantidadSeis.replace(/[\$|\,|\.]/g, ''));

    this.cantidadSiete = formatCurrency(
      this.total,
      'en-US',
      getCurrencySymbol('USD', 'wide')
    );
    this.getAnswer(this.withoutformat(this.cantidadSiete), 26);

    if (id === 26) {
      this.cantidadSiete = formatCurrency(
        this.total,
        'en-US',
        getCurrencySymbol('USD', 'wide')
      );
      this.getAnswer(this.withoutformat(this.cantidadSiete), id);
    }
  }
}
