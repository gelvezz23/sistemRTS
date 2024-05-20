import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cuatro',
  standalone: true,
  imports: [],
  templateUrl: './form-cuatro.component.html',
  styleUrl: './form-cuatro.component.scss',
})
export class FormCuatroComponent {
  constructor(private router: Router) {}

  avalible: boolean = true;

  questions = [
    { id: 1, value: false, quest: '', error: false },
    { id: 2, value: false, quest: '', error: false },
  ];

  public saveLocalStorage() {
    localStorage.setItem('modelos_hipoteticos', JSON.stringify(this.questions));
  }

  public getAnswer(value: boolean, id: number, quest: string): void {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
      this.questions[questionIndex].quest = quest;
    }
    this.avalibleButton();
  }

  public avalibleButton(): void {
    let isValid = true;
    this.questions.forEach((item) => {
      if (item.value === false) {
        item.error = true;
        isValid = false;
      } else {
        item.error = false;
      }
    });

    if (isValid) {
      this.avalible = false;
    }
  }

  public handleClickButton() {
    this.saveLocalStorage();
    this.router.navigate(['form']);
  }
}
