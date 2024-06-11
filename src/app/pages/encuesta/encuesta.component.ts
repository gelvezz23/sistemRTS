import { Component } from '@angular/core';
import { RatingComponent } from '../../components/rating/rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss',
  imports: [RatingComponent],
})
export class EncuestaComponent {
  constructor(private router: Router) {}

  questions = [
    {
      id: 1,
      value: '',
      question:
        'En una escala del 1 a 5, donde uno es muy malo y 5 muy bueno, la experiencia de uso del simulador',
    },
    {
      id: 2,
      value: '',
      question:
        'En una escala del 1 a 5, donde uno es muy malo y 5 muy util, la información arrojada por el simulador',
    },
    {
      id: 3,
      value: '',
      question:
        'En una escala del 1 a 5, donde 1 es muy dificil y 5 muy facil, la el acceso al simulador fue',
    },
    {
      id: 4,
      value: '',
      question:
        '¿Recomendaría el simulador a amigos o familiares que deseen formalizar su negocio?',
    },
    {
      id: 5,
      value: '',
      question:
        '¿En qué considera que podríamos mejorar para hacer un proceso más amigable y eficiente para nuestros usuarios? Déjenos un comentario en el recuadro.',
    },
  ];

  public getAnswer($event: string | any, id: number): void {
    const value = id !== 5 ? $event : $event.target.value;
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }
    console.log(this.questions);
  }
  public handleClick() {
    window.localStorage.setItem('encuesta', JSON.stringify(this.questions));
    this.router.navigate(['descubre']);
  }
}
