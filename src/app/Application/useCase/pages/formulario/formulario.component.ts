import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionComponent } from '../../../../Presentation/components/question/question.component';
import { ModalComponent } from '../../components/modal';
import { DisclaimerComponent } from '../../components/disclaimer';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { QuestionType } from '../../../../Domain/pages/formulario';
import { questions } from './question';
import { LoadingComponent } from '../../components/loading/loading.component';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { adapterToken } from '../../../adapters/adapterToken';
import { HttpClientModule } from '@angular/common/http';
import { AdapterFormAnswer } from '../../../adapters/formAdapter';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/formulario/formulario.component.html',
  styleUrl:
    './../../../../Presentation/pages/formulario/formulario.component.scss',
  imports: [
    ModalComponent,
    DisclaimerComponent,
    QuestionComponent,
    NavbarTwoComponent,
    LoadingComponent,
    HttpClientModule,
  ],
})
class FormularioComponent {
  loading = false;
  error = '';
  isValid: boolean = false;
  public questions: QuestionType[];
  constructor(private router: Router, private serviceSaveDa: SaveDataService) {
    this.questions = questions;
  }

  public saveLocalStorage(): void {
    localStorage.setItem(
      'actividad_economica_a_formalizar',
      JSON.stringify(this.questions)
    );
  }

  public getValidateAnswer(id: number, value: string): void {
    if (id === 17 && value === 'si') {
      this.questions[1].disabled = false;
      this.questions[2].disabled = false;
    }

    if (id === 17 && value === 'no') {
      this.questions[1].disabled = true;
      this.questions[2].disabled = true;
    }

    if (id === 18 && value) {
      this.questions[1].disabled = false;
    }
    if (id === 19 && value) {
      this.questions[2].disabled = false;
    }

    if (id === 20 && value === 'nose') {
      this.questions[4].disabled = false;
      this.questions[6].disabled = false;
    }
    if (id === 20 && value === 'si') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
    }

    if (id === 20 && value === 'no') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
      this.questions[3].checkedYes = false;
    }

    if (id === 21 && value) {
      this.questions[4].disabled = false;
    }
    if (id === 21 && value === 'si') {
      this.questions[5].disabled = false;
    }

    if (id === 21 && value === 'no') {
      this.questions[5].disabled = true;
    }

    if (id === 22 && value === 'no') {
      this.questions[3].checkedYes = true;
      this.questions[5].disabled = true;
      this.questions[7].disabled = true;

      this.getAnswer('si', 4);
    }

    if (id === 22 && value === 'si') {
      this.questions[7].disabled = true;
      this.questions[3].checkedYes = false;
      this.getAnswer('nose', 4);
    }
    console.log(id, value);
    if (id === 23 && value === 'si') {
      this.questions[7].disabled = false;
    }

    if (id === 23 && value === 'no') {
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
      this.loading = true;
      const token = adapterToken(localStorage.getItem('token') || '');
      const dataAdapted = AdapterFormAnswer(this.questions, token);

      this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
        next: (response) => {
          this.loading = false;
          if (response) {
            this.saveLocalStorage();
            this.router.navigate(['form2']);
          }
        },
        error: (error) => {
          console.error('Error response:', error);
          this.error = error.message || 'An unexpected error occurred';
          this.loading = false;
        },
      });
    }
  }
}
export default FormularioComponent;
