import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { municipiosV2 } from './application/useCase/municipios';
import { departamentos } from './application/useCase/departamentos';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  answers = [
    {
      id: 1,
      quest: '¿Cuál es tu sexo?',
      value: '',
      error: false,
    },

    {
      id: 2,
      quest: '¿En qué rango de edad te encuentras?',
      value: '',
      error: false,
    },
    {
      id: 3,
      quest: 'Selecciona el departamento donde vives',
      value: '',
      error: false,
    },
    {
      id: 4,
      quest: 'Selecciona el municipio donde vives',
      value: '',
      error: false,
    },
    {
      id: 5,
      quest: '¿En qué tipo de zona vives?',
      value: '',
      error: false,
    },
    {
      id: 6,
      quest: '¿Qué uso le dará al simulador?',
      value: '',
      error: false,
    },
  ];
  selectedUso: any;
  selectedZona: any;
  selectedEdad: any;
  selectedSexo: any;
  selectedMunicipio: any;
  selectedDepartamentos: any;
  municipios: any = [{}];
  departamentos: any;
  disabledRural = true;
  itemTemplate: any;
  notFoundTemplate: any;
  municipioView: any;
  constructor(private router: Router, private config: NgSelectConfig) {
    this.config.notFoundText = 'No encontrado';
    this.config.appendTo = 'body';
    this.departamentos = departamentos;
    // set the bindValue to global config when you use the same
    // bindValue in most of the place.
    // You can also override bindValue for the specified template
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';
  }
  public handleClick() {
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
      this.router.navigate(['info2']);
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
    this.municipios = municipiosV2[this.selectedDepartamentos];

    this.disabledRural = this.answers[3].value === '';
    this.validateRural();
  }

  public clearAnswer(id: number, $event: { name: string }) {
    const value = $event.name;

    if (id === 3) {
      this.selectedMunicipio = null;
      this.selectedZona = null;
    }

    if (id === 4) {
      this.selectedZona = null;
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

  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something when input is focused
  }
}
