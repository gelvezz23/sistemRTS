import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  answers = [
    {
      id: 1,
      quest: '¿Cuál es tu sexo?',
      value: '',
      error: false,
    },

    {
      id: 2,
      quest: '¿En qué rango de edad te encuentras?',
      value: '',
      error: false,
    },
    {
      id: 3,
      quest: 'Selecciona el departamento donde vives',
      value: '',
      error: false,
    },
    {
      id: 4,
      quest: 'Selecciona el municipio donde vives',
      value: '',
      error: false,
    },
    {
      id: 5,
      quest: '¿En qué tipo de zona vives?',
      value: '',
      error: false,
    },
    {
      id: 6,
      quest: '¿Qué uso le dará al simulador?',
      value: '',
      error: false,
    },
  ];
  constructor(private router: Router) {}
  public handleClick() {
    let isValid = true;
    this.answers.forEach((item) => {
      if (item.value === '') {
        item.error = true;
        isValid = false;
      } else {
        item.error = false;
      }
    });

    if (isValid) {
      this.router.navigate(['info2']);
    }
  }

  public getAnswer(id: number, $event: any) {
    const value = $event.target.value;
    const questionIndex = this.answers.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.answers[questionIndex].value = value;
    }
  }
}
