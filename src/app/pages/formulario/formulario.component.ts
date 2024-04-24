import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  public questions: { id: number; question: string; value: string }[];
  constructor() {
    this.questions = [
      {
        id: 1,
        question:
          '¿Coresponde una actividad de restaurante, cafeterías, autoservicio, bares y similares?',
        value: '',
      },
      { id: 2, question: '¿Es realizada con una franquicia?', value: '' },
      { id: 3, question: '¿Se utilizan marcas propias?', value: '' },
      { id: 4, question: '¿Está gravada con IVA?', value: '' },
      {
        id: 5,
        question: '¿Consiste en venta de bienes corporales muebles?',
        value: '',
      },
      { id: 6, question: '¿Estos bienes están excluidos?', value: '' },
      {
        id: 7,
        question:
          '¿Consiste en la prestación de servicios en el territorio nacional o desde el exterior?',
        value: '',
      },
      { id: 8, question: '¿Estos servicios están excluidos?', value: '' },
    ];
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }
    localStorage.setItem('response', JSON.stringify(this.questions));
  }
}
