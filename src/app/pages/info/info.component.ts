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
    },

    {
      id: 2,
      quest: '¿En qué rango de edad te encuentras?',
      value: '',
    },
  ];
  constructor(private router: Router) {}
  public handleClick() {
    this.router.navigate(['info2']);
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
