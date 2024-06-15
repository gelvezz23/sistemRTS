import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { QuestionComponent } from '../../components/question/question.component';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  imports: [
    ModalComponent,
    DisclaimerComponent,
    QuestionComponent,
    NavbarTwoComponent,
  ],
})
export class FormularioComponent {
  isValid: boolean = false;
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
  constructor(private router: Router) {
    this.questions = [
      {
        id: 1,
        question:
          '¿Coresponde una actividad de restaurante, cafeterías, autoservicio, bares y similares?',
        value: '',
        disabled: false,
        required: true,
        checkedYes: false,
        checkedNo: false,
        content: '',
        error: false,
      },
      {
        id: 2,
        question: '¿Es realizada con una franquicia?',
        value: '',
        disabled: true,
        checkedYes: false,
        checkedNo: false,
        required: true,
        error: false,
        content: `Una franquicia es un acuerdo donde el
        franquiciador permite al franquiciado explotar un negocio bajo su marca y sistema a cambio de un pago. Beneficia al
        franquiciado con una marca establecida y soporte, mientras el franquiciador expande su mercado con menor riesgo. Se aplica
        en varios sectores como restauración y retail. Ejemplos incluyen McDonald's y Starbucks.`,
      },
      {
        id: 3,
        question: '¿Se utilizan marcas propias?',
        value: '',
        disabled: true,
        required: true,
        checkedYes: false,
        checkedNo: false,
        error: false,
        content:
          'Marca es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario, como por ejemplo Coca Cola o Apple.',
      },
      {
        id: 4,
        question: '¿Está gravada con IVA?',
        value: '',
        disabled: false,
        checkedYes: false,
        required: true,
        checkedNo: false,
        checkedNose: false,
        error: false,
        content: '',
      },
      {
        id: 5,
        question: '¿Consiste en venta de bienes corporales muebles?',
        value: '',
        disabled: true,
        required: true,
        checkedYes: false,
        checkedNo: false,
        error: false,
        content: '',
      },
      {
        id: 6,
        question: '¿Estos bienes están excluidos?',
        value: '',
        disabled: true,
        checkedYes: false,
        required: true,
        checkedNo: false,
        error: false,
        content: ``,
      },
      {
        id: 7,
        question:
          '¿Consiste en la prestación de servicios en el territorio nacional o desde el exterior?',
        value: '',
        disabled: true,
        checkedYes: false,
        checkedNo: false,
        required: true,
        error: false,
        content: '',
      },
      {
        id: 8,
        question: '¿Estos servicios están excluidos?',
        value: '',
        disabled: true,
        checkedYes: false,
        required: true,
        checkedNo: false,
        error: false,
        content: '',
      },
    ];
  }

  public saveLocalStorage(): void {
    localStorage.setItem(
      'actividad_economica_a_formalizar',
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

    if (id === 4 && value === 'nose') {
      this.questions[4].disabled = false;
      this.questions[6].disabled = false;
    }
    if (id === 4 && value === 'si') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
    }

    if (id === 4 && value === 'no') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
      this.questions[3].checkedYes = false;
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

    if (id === 6 && value === 'no') {
      this.questions[3].checkedYes = true;
      this.questions[5].disabled = true;
      this.questions[7].disabled = true;

      this.getAnswer('si', 4);
    }

    if (id === 6 && value === 'si') {
      this.questions[7].disabled = true;
      this.questions[3].checkedYes = false;
      this.getAnswer('nose', 4);
    }
    console.log(id, value);
    if (id === 7 && value === 'si') {
      this.questions[7].disabled = false;
    }

    if (id === 7 && value === 'no') {
      this.questions[7].disabled = true;
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

  public handleSubmit($event: any): void {
    $event.preventDefault();

    let isValid = true;
    this.questions.forEach((item) => {
      if (item.value === '' && !item.disabled) {
        item.error = true;
        isValid = false;
      } else {
        item.error = false;
      }
    });

    if (isValid) {
      this.router.navigate(['form2']);
    }
  }
}
