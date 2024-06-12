import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-dos',
  standalone: true,
  templateUrl: './formulario-dos.component.html',
  styleUrl: './formulario-dos.component.scss',
  imports: [ModalComponent, DisclaimerComponent],
  providers: [CurrencyPipe],
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
    required: boolean;
    error: boolean;
  }[];
  public constitucion: string;
  public cantidad!: string;
  public test!: number;
  public cantidadDos!: string;
  constructor(private router: Router, private currencyPipe: CurrencyPipe) {
    this.constitucion = JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || '{}'
    ).titular.value;
    this.questions = [
      {
        id: 9,
        question: '¿Tiene más de un establecimiento de comercio?',
        value: '',
        disabled: false,
        checkedYes: false,
        checkedNo: false,
        required: true,
        error: false,
        content:
          'El establecimiento de comercio es un conjunto de bienes organizados por el empresario para desarrollar y cumplir los fines de la empresa, ejemplo: tiendas, supermercados, restaurantes, cafeterías, fábricas, almacenes, etc.',
      },
      {
        id: 10,
        question:
          '¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?',
        value: '',
        required: true,
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        error: false,
        content: '',
      },
      {
        id: 101,
        question:
          '¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?',
        value: '',
        required: true,
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        error: false,
        content: '',
      },
      {
        id: 11,
        question:
          '¿Realizo compras y consumos totales superioes a 1400 unidades de Valor Tributario (UVT) ($65.891.000) durante el año inmediatamente anterior ?',
        value: '',
        required: true,
        disabled: this.constitucion !== 'persona natural',
        checkedYes: false,
        checkedNo: false,
        error: false,
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
        required: true,
        checkedNo: false,
        error: false,

        content: `Los intangibles son activos no físicos que
        tienen valor para una organización o persona, como marcas comerciales, patentes, derechos de autor y propiedad intelectual.
        A diferencia de cosas físicas como computadoras o edificios, su valor viene de lo que representan, como ideas o reputación.`,
      },
    ];
    this.cantidad = '';
    this.cantidadDos = '';
  }

  public saveLocalStorage(): void {
    localStorage.setItem(
      'formulario_sobre_actividad_economica',
      JSON.stringify(this.questions)
    );
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

  public updateValue(event: any, id: number) {
    let input = event.value?.trim() || '';
    if (id === 10) {
      this.cantidad =
        this.currencyPipe.transform(
          input.replace(/\D/g, ''),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(input.replace(/\D/g, ''), 10);
    }
    if (id === 101) {
      this.cantidadDos =
        this.currencyPipe.transform(
          input.replace(/\D/g, ''),
          'USD',
          'symbol',
          '1.0-0'
        ) || '';
      this.getAnswer(input.replace(/\D/g, ''), 101);
    }
  }

  public filtrarNumero(event: KeyboardEvent) {
    const allowedKeys =
      /[0-9]|\bDelete\b|\bBackspace\b|[\u2190-\u2193]|\bArrowLeft\b|\bArrowRight\b|\bDelete\b/g;

    if (event.key.match(allowedKeys)) {
      return true; // Permite la entrada
    } else {
      event.preventDefault(); // Evita la entrada
    }
    return;
  }

  public handleSubmit($event: any): void {
    $event.preventDefault();
    console.log(this.questions);
    let isValid = true;
    this.questions.forEach((item) => {
      if (item.value === '' && !item.disabled) {
        console.log(item.id, item.value);

        item.error = true;
        isValid = false;
      } else {
        item.error = false;
      }
    });

    if (isValid) {
      this.router.navigate(['form3']);
    }
  }
}
