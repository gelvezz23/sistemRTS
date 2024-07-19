import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { municipiosV2 } from './utils/municipios';
import { departamentosData } from './utils/departamentos';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoAdapter } from '../../../adapters/infoAnswers';
import { LoadingComponent } from '../../components/loading/loading.component';
import { adapterToken } from 'app/Application/adapters/adapterToken';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';
import { answers } from './utils/answers';
@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './../../../../Presentation/pages/info/info.component.html',
  styleUrl: './../../../../Presentation/pages/info/info.component.scss',
  imports: [
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    LoadingComponent,
    NavbarBgBlackComponent,
  ],
})
class InfoComponent {
  answers = answers;
  error = '';
  loading = false;
  selectedUso: any;
  selectedZona: any;
  selectedEdad: any;
  selectedSexo: any;
  selectedMunicipio: any;
  selectedDepartamentos: any;
  municipios: any = [{}];
  disabledRural = true;
  itemTemplate: any;
  notFoundTemplate: any;
  municipioView: any;
  departamentos: any = [];
  zone = [{ name: 'Urbana' }, { name: 'Rural' }];
  currentPage = 1;
  pageSize = 8;
  constructor(
    private router: Router,
    private config: NgSelectConfig,
    private serviceSaveDa: SaveDataService
  ) {
    this.config.notFoundText = 'No encontrado';
    this.config.loadingText = 'cargando...';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  ngOnInit() {
    this.departamentos = departamentosData;
  }

  public handleClick() {
    const token = adapterToken(localStorage.getItem('token') || '');
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
      this.loading = true;

      const dataAdapted = InfoAdapter(this.answers, token);

      this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
        next: (response) => {
          this.loading = false;
          if (response) {
            setTimeout(() => this.router.navigate(['info2']), 1000);
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

  public getAnswer(id: number, $event: { name: string }) {
    const value = $event.name;
    const questionIndex = this.answers.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.answers[questionIndex].value = value;
    }
    this.municipios = municipiosV2[this.selectedDepartamentos]?.sort(
      (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)
    );

    this.disabledRural = this.answers[3].value === '';
    this.validateRural();
  }

  public clearAnswer(id: number, $event: { name: string }) {
    const value = $event.name;

    if (id === 3) {
      this.selectedMunicipio = null;
      this.selectedZona = null;
      this.municipios = null;
      this.disabledRural = true;
    }

    if (id === 4) {
      this.selectedZona = null;
      this.disabledRural = true;
    }

    const questionIndex = this.answers.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.answers[questionIndex].value = value;
    }

    this.disabledRural = this.answers[3].value === '';
    this.validateRural();
  }

  public saveLocalStorage() {
    localStorage.setItem(
      'Conocimiento_del_usuario',
      JSON.stringify(this.answers)
    );
  }

  public validateRural() {
    if (this.disabledRural) {
      this.selectedZona = null;
      this.answers[4].value = '';
    }

    this.saveLocalStorage();
  }
}
export default InfoComponent;
