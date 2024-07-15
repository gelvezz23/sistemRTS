import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from '../../components/disclaimer';
import { ModalComponent } from '../../components/modal';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { LoadingComponent } from '../../components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { adapterToken } from '../../../adapters/adapterToken';
import { AdapterFormTresAnswer } from '../../../adapters/adapterFormTresAnswer';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
@Component({
  selector: 'app-formulario-tres',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/formulario-tres/formulario-tres.component.html',
  styleUrl:
    './../../../../Presentation/pages/formulario-tres/formulario-tres.component.scss',
  providers: [CurrencyPipe],
  imports: [
    DisclaimerComponent,
    NavbarTwoComponent,
    FormsModule,
    CommonModule,
    ModalComponent,
    LoadingComponent,
    HttpClientModule,
  ],
})
class FormularioTresComponent {
  loading = false;
  error = '';
  public cantidad!: string;
  public cantidadDos!: string;
  public cantidadTres!: string;
  public cantidadCuatro!: string;
  public cantidadCinco!: string;
  public cantidadSeis!: string;
  public cantidadSiete!: string;
  public cantidadOcho!: string;
  public cantidadNueve!: string;
  public cantidadDiez!: string;
  public cantidadOnce!: string;
  public cantidadDoce!: string;
  public total!: number;
  public totalDos!: number;

  public answers!: { id: number; value: string; text: string }[];

  constructor(
    private currencyPipe: CurrencyPipe,
    private router: Router,
    private serviceSaveDa: SaveDataService
  ) {
    this.cantidad = '';
    this.cantidadDos = '';
    this.cantidadTres = '';
    this.cantidadCuatro = '';
    this.cantidadCinco = '';
    this.cantidadSeis = '';
    this.cantidadSiete = '';
    this.cantidadOcho = '';
    this.cantidadNueve = '';
    this.cantidadDiez = '';
    this.cantidadOnce = '';
    this.cantidadDoce = '';
    this.total = 0;
    this.totalDos = 0;
    this.answers = [
      {
        id: 30,
        value: '',
        text: '¿Cuál fue su patrimonio bruto el año anterior?',
      },
      {
        id: 31,
        value: '',
        text: '¿Cuál es su patrimonio bruto del presente año?',
      },
      { id: 32, value: '', text: '¿Ingresos de actividades gravadas con IVA?' },
      {
        id: 33,
        value: '',
        text: 'Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares',
      },
      { id: 34, value: '', text: 'Ingresos Laborales' },
      { id: 35, value: '', text: 'Otros ingresos' },
      { id: 36, value: '', text: 'Total de ingresos brutos' },
      { id: 37, value: '', text: '¿Ingresos de actividades gravadas con IVA?' },
      {
        id: 38,
        value: '',
        text: 'Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares',
      },
      { id: 39, value: '', text: 'Ingresos Laborales' },
      { id: 40, value: '', text: 'Otros ingresos' },
      { id: 41, value: '', text: 'Total de ingresos brutos' },
    ];
  }

  public saveLocalStorage(): void {
    localStorage.setItem('response-Three', JSON.stringify(this.answers));
  }

  soloNumeros(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.answers.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.answers[questionIndex].value = value;
    }
    this.saveLocalStorage();
  }

  public formaterInput(input: any) {
    return input !== 0
      ? this.currencyPipe.transform(
          input
            .replace(/\D/g, '')
            .replace(/^0+/)
            .replace(/[^0-9\-+\.]/g, ''),
          'USD',
          'symbol',
          '1.0-0'
        ) || '0'
      : '';
  }

  public updateValue(event: any, id: number) {
    let input = event.value || 0;

    if (id === 30) {
      this.cantidad = this.formaterInput(input);

      this.getAnswer(this.cantidad, id);
    }
    if (id === 31) {
      this.cantidadDos = this.formaterInput(input);
      this.getAnswer(this.cantidadDos, id);
    }

    if (id === 32) {
      this.cantidadTres = this.formaterInput(input);
      this.getAnswer(this.cantidadTres, id);
    }

    if (id === 33) {
      this.cantidadCuatro = this.formaterInput(input);
      this.getAnswer(this.cantidadCuatro, id);
    }

    if (id === 34) {
      this.cantidadCinco = this.formaterInput(input);
      this.getAnswer(this.cantidadCinco, id);
    }
    if (id === 35) {
      this.cantidadSeis = this.formaterInput(input);
      this.getAnswer(this.cantidadSeis, id);
    }

    this.total =
      Number(this.cantidadTres.replace(/\D/g, '')) +
      Number(this.cantidadCuatro.replace(/\D/g, '')) +
      Number(this.cantidadCinco.replace(/\D/g, '')) +
      Number(this.cantidadSeis.replace(/\D/g, ''));

    this.cantidadSiete =
      this.currencyPipe.transform(this.total, 'USD', 'symbol', '1.0-0') || '';

    this.getAnswer(this.cantidadSiete, 36);

    if (id === 37) {
      this.cantidadOcho = this.formaterInput(input);
      this.getAnswer(this.cantidadOcho, id);
    }
    if (id === 38) {
      this.cantidadNueve = this.formaterInput(input);
      this.getAnswer(this.cantidadNueve, id);
    }
    if (id === 39) {
      this.cantidadDiez = this.formaterInput(input);
      this.getAnswer(this.cantidadDiez, id);
    }
    if (id === 40) {
      this.cantidadOnce = this.formaterInput(input);
      this.getAnswer(this.cantidadOnce, id);
    }

    this.totalDos =
      Number(this.cantidadOcho.replace(/\D/g, '')) +
      Number(this.cantidadNueve.replace(/\D/g, '')) +
      Number(this.cantidadDiez.replace(/\D/g, '')) +
      Number(this.cantidadOnce.replace(/\D/g, ''));

    this.cantidadDoce =
      this.currencyPipe.transform(this.totalDos, 'USD', 'symbol', '1.0-0') ||
      '';
    this.getAnswer(this.cantidadDoce, 41);
  }

  public filtrarNumero(event: KeyboardEvent) {
    const allowedKeys =
      /[0-9]|\bDelete\b|\bBackspace\b|[\u2190-\u2193]|\bArrowLeft\b|\bArrowRight\b|\bDelete\b/g;

    if (event.key.match(allowedKeys)) {
      return true; // Permite la entrada
    } else {
      event.preventDefault(); // Evita la entrada
    }
    return;
  }

  public handleClick() {
    console.log(this.answers);
    this.loading = true;
    const token = adapterToken(localStorage.getItem('token') || '');
    const dataAdapted = AdapterFormTresAnswer(this.answers, token);

    this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
      next: (response) => {
        this.loading = false;
        if (response) {
          this.saveLocalStorage();
          this.router.navigate(['form7']);
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

export default FormularioTresComponent;
