import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { adapterToken } from '../../../adapters/adapterToken';
import { AdapterFormCuatro } from '../../../adapters/adapterFormCuatro';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';
import {
  ANSWER_FIVE,
  ANSWER_FOUR,
  ANSWER_ONE,
  ANSWER_SEVEN,
  ANSWER_SIX,
  ANSWER_THREE,
  ANSWER_TWO,
} from './constants';
import { FormsttedValuesService } from 'app/Infraestructure/formatedValues/formstted-values.service';

@Component({
  selector: 'app-form-cuatro',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/form-cuatro/form-cuatro.component.html',
  styleUrl:
    './../../../../Presentation/pages/form-cuatro/form-cuatro.component.scss',
  imports: [
    ModalComponent,
    HttpClientModule,
    LoadingComponent,
    NavbarBgBlackComponent,
  ],
})
class FormCuatroComponent implements OnInit {
  constructor(
    private router: Router,
    private serviceSaveDa: SaveDataService,
    private serviceParametrization: FormsttedValuesService
  ) {}
  loading = false;
  error = '';
  avalible: boolean = true;
  ANSWER_ONE = ANSWER_ONE;
  ANSWER_TWO = ANSWER_TWO;
  ANSWER_THREE = ANSWER_THREE;
  ANSWER_FOUR = ANSWER_FOUR;
  ANSWER_FIVE = ANSWER_FIVE;
  ANSWER_SIX = ANSWER_SIX;
  ANSWER_SEVEN = ANSWER_SEVEN;

  questions = [
    { id: 47, value: false, quest: '', error: false },
    { id: 48, value: false, quest: '', error: false },
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
  public ngOnInit() {
    this.serviceParametrization.getFormattedValues().subscribe({
      next: (response) => {
        if (response) {
          const { Dato1, Dato2, Dato3, Dato4, Dato5, Dato6, Dato7 } = response;

          this.ANSWER_ONE = Dato1;
          this.ANSWER_TWO = Dato2;
          this.ANSWER_THREE = Dato3;
          this.ANSWER_FOUR = Dato4;
          this.ANSWER_FIVE = Dato5;
          this.ANSWER_SIX = Dato6;
          this.ANSWER_SEVEN = Dato7;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public handleClickButton() {
    this.saveLocalStorage();
    this.loading = true;

    const token = adapterToken(localStorage.getItem('token') || '');
    const dataAdapted = AdapterFormCuatro(this.questions, token);

    this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
      next: (response) => {
        if (response) {
          this.loading = false;
          this.error = '';
          this.router.navigate(['form5']);
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
export default FormCuatroComponent;
