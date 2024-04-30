import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-formulario-dos',
  standalone: true,
  templateUrl: './formulario-dos.component.html',
  styleUrl: './formulario-dos.component.scss',
  imports: [ModalComponent, DisclaimerComponent],
})
export class FormularioDosComponent {
  public questions: {
    id: number;
    question: string;
    value: string;
    disabled: boolean;
    content: string;
    checkedYes: boolean | string;
    checkedNo: boolean | string;
    checkedNose?: boolean | string;
  }[];
  public constitucion: string;
  public cantidad!: string;
  public cantidadDos!: string;
  constructor() {
    this.constitucion = 'persona natural';
    this.questions = [
      {
        id: 9,
        question: '¿Tiene más de un establecimiento de comercio?',
        value: '',
        disabled: false,
        checkedYes: false,
        checkedNo: false,
        content:
          'El establecimiento de comercio es un conjunto de bienes organizados por el empresario para desarrollar y cumplir los fines de la empresa, ejemplo: tiendas, supermercados, restaurantes, cafeterías, fábricas, almacenes, etc.',
      },
      {
        id: 10,
        question:
          '¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?',
        value: '',
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        content: '',
      },
      {
        id: 101,
        question:
          '¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?',
        value: '',
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        content: '',
      },
      {
        id: 11,
        question:
          '¿Realizo compras y consumos totales superioes a 1400 unidades de Valor Tributario (UVT) ($65.891.000) durante el año inmediatamente anterior ?',
        value: '',
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        content:
          '¿La actividad economica se realiza bajo un sistema que implica la explotacion de intangibles (por ejemplo, franquicia,concesion, regalia o similar)',
      },
      {
        id: 12,
        question: `¿La actividad económica se realiza bajo un sistema que implique la explotación de
          intangibles (por ejemplo, franquicia, concesión, regalía o similar) ?`,
        value: '',
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        content: `Los intangibles son activos no físicos que
        tienen valor para una organización o persona, como marcas comerciales, patentes, derechos de autor y propiedad intelectual.
        A diferencia de cosas físicas como computadoras o edificios, su valor viene de lo que representan, como ideas o reputación.`,
      },
    ];
    this.cantidad = '';
    this.cantidadDos = '';
  }

  public saveLocalStorage(): void {
    localStorage.setItem('response-two', JSON.stringify(this.questions));
  }

  public getValidateAnswer(id: number, value: string): void {
    if (id === 1 && value === 'si') {
      this.questions[1].disabled = false;
      this.questions[2].disabled = false;
    }

    if (id === 1 && value === 'no') {
      this.questions[1].disabled = true;
      this.questions[2].disabled = true;
    }

    if (id === 2 && value) {
      this.questions[1].disabled = false;
    }
    if (id === 3 && value) {
      this.questions[2].disabled = false;
    }

    if (id === 4 && value === 'no se') {
      this.questions[4].disabled = false;
    }
    if (id === 4 && value === 'si') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
    }

    if (id === 4 && value === 'no') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
    }

    if (id === 5 && value) {
      this.questions[4].disabled = false;
    }
    if (id === 5 && value === 'si') {
      this.questions[5].disabled = false;
    }

    if (id === 5 && value === 'no') {
      this.questions[5].disabled = true;
    }
    if (id === 6 && value) {
      this.questions[5].disabled = false;
    }
    if (id === 6 && value === 'no') {
      this.questions[3].checkedYes = true;
      this.questions[5].disabled = true;
      this.getAnswer('si', 4);
    }
    if (id === 6 && value === 'si') {
      this.questions[3].checkedYes = false;
      this.getAnswer('', 4);
    }
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }
    this.getValidateAnswer(id, value);
    this.saveLocalStorage();
  }

  public updateValue(event: any) {
    let val = parseInt(event.value || '', 10);
    if (Number.isNaN(val)) {
      val = 0;
    }
    this.getAnswer(val.toString(), 10);
    this.cantidad = formatCurrency(
      val,
      'en-US',
      getCurrencySymbol('USD', 'wide')
    );
  }

  public updateValueDos(event: any) {
    let val = parseInt(event.value || '', 10);
    if (Number.isNaN(val)) {
      val = 0;
    }
    this.getAnswer(val.toString(), 101);
    this.cantidadDos = formatCurrency(
      val,
      'en-US',
      getCurrencySymbol('USD', 'narrow')
    );
  }
}
