import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { adapterToken } from '../../../adapters/adapterToken';
import { AdapterFormCuatro } from '../../../adapters/adapterFormCuatro';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-form-cuatro',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/form-cuatro/form-cuatro.component.html',
  styleUrl:
    './../../../../Presentation/pages/form-cuatro/form-cuatro.component.scss',
  imports: [
    NavbarTwoComponent,
    ModalComponent,
    HttpClientModule,
    LoadingComponent,
  ],
})
class FormCuatroComponent {
  constructor(private router: Router, private serviceSaveDa: SaveDataService) {}
  loading = false;
  error = '';
  avalible: boolean = true;

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

  public handleClickButton() {
    this.saveLocalStorage();
    this.loading = true;
    window.localStorage.setItem('encuesta', JSON.stringify(this.questions));

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
