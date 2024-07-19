import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal';
import { DisclaimerComponent } from '../../components/disclaimer';
import { LoadingComponent } from '../../components/loading/loading.component';
import { questions } from './questions';
import { adapterToken } from '../../../adapters/adapterToken';
import { AdapterFormAnswer } from '../../../adapters/formAdapter';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';
import { formatedResponse } from '../../utils/formatedResponse';

@Component({
  selector: 'app-formulario-dos',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/formulario-dos/formulario-dos.component.html',
  styleUrl:
    './../../../../Presentation/pages/formulario-dos/formulario-dos.component.scss',
  providers: [CurrencyPipe],
  imports: [
    ModalComponent,
    DisclaimerComponent,
    LoadingComponent,
    HttpClientModule,
    NavbarBgBlackComponent,
  ],
})
class FormularioDosComponent {
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
  loading = false;
  error = '';
  public constitucion: string;
  public cantidad!: string;
  public test!: number;
  public cantidadDos!: string;
  constructor(
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private serviceSaveDa: SaveDataService
  ) {
    this.constitucion = window.JSON.parse(
      localStorage.getItem('caracterizacion_de_negocio') || '{}'
    ).titular.value;
    this.questions = questions(this.constitucion);
    this.cantidad = '';
    this.cantidadDos = '';
  }

  public saveLocalStorage(): void {
    localStorage.setItem(
      'formulario_sobre_actividad_economica',
      window.JSON.stringify(this.questions)
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

  public formaterInput(input: any) {
    const formattedInput = formatedResponse(input);
    return (
      this.currencyPipe.transform(formattedInput, 'USD', 'symbol', '1.0-0') ||
      '0'
    );
  }

  public updateValue(event: any, id: number) {
    let input = event.value?.trim() || '';
    if (id === 26) {
      this.cantidad = this.formaterInput(input);

      this.getAnswer(formatedResponse(input), 26);
    }
    if (id === 27) {
      this.cantidadDos = this.formaterInput(input);
      this.getAnswer(formatedResponse(input), 27);
    }
  }

  public filtrarNumero(event: KeyboardEvent) {
    const allowedKeys =
      /[0-9]|\bDelete\b|\bBackspace\b|[\u2190-\u2193]|\bArrowLeft\b|\bArrowRight\b|\bDelete\b/g;

    if (event.key.match(allowedKeys)) {
      return true;
    } else {
      event.preventDefault();
    }
    return;
  }

  public handleSubmit($event: any): void {
    $event.preventDefault();
    const token = adapterToken(localStorage.getItem('token') || '');
    const dataAdapted = AdapterFormAnswer(this.questions, token);
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

      this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
        next: (response) => {
          this.loading = false;
          if (response) {
            this.saveLocalStorage();
            this.router.navigate(['form3']);
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
export default FormularioDosComponent;
