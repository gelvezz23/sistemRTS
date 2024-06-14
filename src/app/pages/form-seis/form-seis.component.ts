import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';

@Component({
  selector: 'app-form-seis',
  standalone: true,
  templateUrl: './form-seis.component.html',
  styleUrl: './form-seis.component.scss',
  imports: [NavbarTwoComponent],
})
export class FormSeisComponent {
  public questions: {
    id: number;
    quest: string;
    value: string;
    disabled: boolean;
    error: boolean;
  }[] = [];
  constructor(private router: Router) {
    this.questions = [
      {
        id: 1,
        quest: '¿Tiene Registro Único Tributario (RUT)?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 2,
        quest: '¿Tiene Registro Mercantil?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 3,
        quest: '¿Renueva el Registro Mercantil cada año?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 4,
        quest:
          '¿Paga su salud, pensiones y riesgos laborales de los trabajadores?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 5,
        quest: '¿Paga su salud, pensiones y riesgos laborales?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 6,
        quest:
          '¿Conoce los requerimientos o permisos para desarrollar su actividad y cumple con estos?',
        value: '',
        disabled: false,
        error: false,
      },
      {
        id: 7,
        quest:
          '¿Conoce los deberes y obligaciones tributarias de su actividad?',
        value: '',
        disabled: false,
        error: false,
      },
    ];
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
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const titular = JSON.parse(data || '').titular.value;
    if (titular === 'persona juridica') {
      this.getAnswer('si', 2);
      return true;
    }
    return false;
  }
  public viewQuestOne() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const titular = JSON.parse(data || '').titular.value;

    if (titular === 'persona natural') {
      this.questions[0].disabled = false;
      return true;
    }
    this.questions[0].disabled = true;
    return false;
  }

  public viewQuestTwo() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const negocio = JSON.parse(data || '').negocio.value;

    if (negocio === 'comercial') {
      this.questions[1].disabled = false;
      return true;
    }
    this.questions[1].disabled = true;
    return false;
  }

  public viewQuestThree() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const titular = JSON.parse(data || '').titular.value;

    if (titular === 'persona juridica' || this.questions[1]?.value === 'si') {
      this.questions[2].disabled = false;
      return true;
    }
    this.questions[2].disabled = true;
    return false;
  }

  public viewQuestFour() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const trabajadores = JSON.parse(data || '').trabajadores.value;
    if (trabajadores === 'si') {
      this.questions[3].disabled = false;
      return true;
    }
    this.questions[3].disabled = true;
    return false;
  }

  public viewQuestFive() {
    const data = localStorage.getItem('caracterizacion_de_negocio');
    const titular = JSON.parse(data || '').titular.value;
    if (titular === 'persona natural') {
      this.questions[4].disabled = false;
      return true;
    }
    this.questions[4].disabled = true;
    return false;
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
      this.router.navigate(['resultado1']);
    }
    console.log(this.questions);
  }
}
