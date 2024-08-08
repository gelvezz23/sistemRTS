import { Component } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { getCaracterizacion } from './utils/caracterizacionDeNegocio/getCaracterizacion';
import { caracterizacionValidate } from './utils/caracterizacionDeNegocio/caracterizacionValidate';
import { getModeloHipotetico } from './utils/modeloHipotetico/getModeloHipotetico';
import { getModeloyCaracterizacion } from './utils/getModeloyCaracterizacion';
import {
  ANSWER_FOUR,
  ANSWER_SEVEN,
  ANSWER_SIX,
  ANSWER_THREE,
  ANSWER_TWO,
} from '../form-cuatro/constants';

@Component({
  selector: 'app-form-cinco',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/form-cinco/form-cinco.component.html',
  styleUrl:
    './../../../../Presentation/pages/form-cinco/form-cinco.component.scss',
  imports: [NavbarTwoComponent],
})
class FormCincoComponent {
  constructor(private router: Router) {}
  loading = false;
  isViewButtonFive = true;
  isPersonaNatural = true;

  public viewButtonOne() {
    const data =
      window.localStorage.getItem('caracterizacion_de_negocio') || '';
    const { titular, negocio } = getCaracterizacion(data);
    const validate = caracterizacionValidate(titular, negocio);
    return validate;
  }

  public viewButtonFour() {
    const data =
      window.localStorage.getItem('caracterizacion_de_negocio') || '';
    const { titular, negocio } = getCaracterizacion(data);
    const validate = caracterizacionValidate(titular, negocio);
    if (negocio === 'profesion liberal o artistica') {
      return true;
    }
    return validate;
  }

  public viewButtonFive() {
    const { questCero } = getModeloHipotetico(
      window.localStorage.getItem('modelos_hipoteticos') || ''
    );

    if (questCero === ANSWER_FOUR) {
      return true;
    }
    if (questCero === ANSWER_THREE) {
      return true;
    }
    return false;
  }

  public viewButtonSeven() {
    const { titular, questCero, questUno } = getModeloyCaracterizacion();

    switch (true) {
      case titular === 'persona juridica' || titular === 'persona natural':
        return true;
      case questUno === ANSWER_SIX && titular === 'persona natural':
        return true;
      case questCero === ANSWER_TWO:
        return true;
      case questUno === ANSWER_TWO && titular === 'persona natural':
        return true;
      case questCero === ANSWER_THREE && titular === 'persona natural':
        return true;
      case questCero === ANSWER_FOUR && titular === 'persona natural':
        return true;
      case questUno === ANSWER_SEVEN && titular === 'persona natural':
        return true;
      default:
        return false;
    }
  }

  public viewButtonEigth() {
    const data = window.localStorage.getItem('modelos_hipoteticos') || '';
    const { questCero } = getModeloHipotetico(data);

    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );

    if (titular === 'persona juridica') {
      return true;
    }

    if (titular === 'persona natural' && questCero === ANSWER_THREE) {
      return true;
    }

    if (questCero === ANSWER_FOUR && titular === 'persona natural') {
      return true;
    }
    return false;
  }

  public viewButtonNine() {
    const { negocio } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );

    if (
      negocio === 'comercial' ||
      negocio === 'profesion liberal o artistica'
    ) {
      return true;
    }

    return false;
  }

  public viewButtonTen() {
    const { negocio } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );

    const { questCero } = getModeloHipotetico(
      window.localStorage.getItem('modelos_hipoteticos') || ''
    );

    if (negocio === 'comercial' && questCero === ANSWER_THREE) {
      return true;
    }

    if (questCero === ANSWER_FOUR && negocio === 'comercial') {
      return true;
    }
    return false;
  }

  public handleClick() {
    this.router.navigate(['beneficio']);
  }

  public screenShot() {
    this.loading = true;
    const DATA: any = document.getElementById('stepper-dos');
    DATA.style.backgroundColor = '#272944';

    const doc = new jsPDF('l', 'pt', 'a4');
    const options = {
      background: '#272944',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');
        const bufferX = 70;
        const bufferY = 0;
        const pdfWidth = 700;
        const pdfHeight = 600;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(
          `resultado_simulador_RTS${new Date().toISOString()}.pdf`
        );
        this.loading = false;
      });
  }
}
export default FormCincoComponent;
