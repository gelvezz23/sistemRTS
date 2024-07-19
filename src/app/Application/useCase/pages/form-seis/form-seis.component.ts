import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { QuestionType } from '../../../../Domain/pages/form-seis';
import { questions } from './question';
import { getCaracterizacion } from '../form-cinco/utils/caracterizacionDeNegocio/getCaracterizacion';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { adapterToken } from '../../../adapters/adapterToken';
import { HttpClientModule } from '@angular/common/http';
import { AdapterFormSeisAnswer } from '../../../adapters/formSeisAnswer';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';

@Component({
  selector: 'app-form-seis',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/form-seis/form-seis.component.html',
  styleUrl:
    './../../../../Presentation/pages/form-seis/form-seis.component.scss',
  imports: [
    ModalComponent,
    HttpClientModule,
    LoadingComponent,
    NavbarBgBlackComponent,
  ],
})
class FormSeisComponent {
  public questions: QuestionType[] = [];
  loading = false;
  error = '';
  message: string = '';
  constructor(private router: Router, private serviceSaveDa: SaveDataService) {
    this.questions = questions;
  }

  public saveLocalStorage(): void {
    localStorage.setItem(
      'negocio_esta_formalizado',
      JSON.stringify(this.questions)
    );
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }

    this.saveLocalStorage();
  }

  handleCheckedTwo() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (titular === 'persona juridica') {
      this.getAnswer('si', 11);
      return true;
    }
    return false;
  }
  public viewQuestOne() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (titular === 'persona natural') {
      this.questions[0].disabled = false;
      return true;
    }
    this.questions[0].disabled = true;
    return false;
  }

  public viewQuestTwo() {
    const { negocio } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (negocio === 'comercial') {
      this.questions[1].disabled = false;
      return true;
    }
    this.questions[1].disabled = true;
    return false;
  }

  public viewQuestThree() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (titular === 'persona juridica' || this.questions[1]?.value === 'si') {
      this.questions[2].disabled = false;
      return true;
    }
    this.questions[2].disabled = true;
    return false;
  }

  public viewQuestFour() {
    const { trabajadores } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (trabajadores === 'si') {
      this.questions[3].disabled = false;
      return true;
    }
    this.questions[3].disabled = true;
    return false;
  }

  public viewQuestFive() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    if (titular === 'persona natural') {
      this.questions[4].disabled = false;
      return true;
    }
    this.questions[4].disabled = true;
    return false;
  }

  public handleSubmit($event: any): void {
    this.loading = true;
    $event.preventDefault();
    const token = adapterToken(localStorage.getItem('token') || '');
    const dataAdapted = AdapterFormSeisAnswer(this.questions, token);

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
      this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
        next: (response) => {
          this.loading = false;
          if (response) {
            this.saveLocalStorage();
            this.router.navigate(['resultado1']);
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
export default FormSeisComponent;
