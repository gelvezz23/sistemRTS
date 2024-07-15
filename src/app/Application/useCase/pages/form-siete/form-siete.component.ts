import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { getCaracterizacion } from '../form-cinco/utils/caracterizacionDeNegocio/getCaracterizacion';
import { getActividadEconomica } from './utils/getActividadEconomica';
import { getResponseThree } from './utils/getResponseThree';
import { getActividadEconomicaAformalizar } from './utils/getActividadEconomicaAformalizar';

@Component({
  selector: 'app-form-siete',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/form-siete/form-siete.component.html',
  styleUrl:
    './../../../../Presentation/pages/form-siete/form-siete.component.scss',
  imports: [NavbarTwoComponent],
})
class FormSieteComponent {
  constructor(private router: Router) {}
  loading = false;
  public viewButtonOne() {
    const data =
      window.localStorage.getItem('caracterizacion_de_negocio') || '';
    const { titular, negocio } = getCaracterizacion(data);

    if (
      titular !== 'persona natural' &&
      negocio !== 'profesion liberal o artistica'
    ) {
      return true;
    }
    return false;
  }

  public viewButtonFive() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    const { mas_de_un_establecimiento, la_actividad_economica } =
      getActividadEconomica(
        window.localStorage.getItem('formulario_sobre_actividad_economica') ||
          ''
      );

    const { gravadas_con_iva, total_ingresos_brutos_2, gravadas_con_iva_2 } =
      getResponseThree(window.localStorage.getItem('response-Three') || '');
    const tresmilquinientosuvt = Number('$164,727,500'.replace(/\$|,/g, ''));

    if (titular === 'persona juridica') {
      return true;
    }

    if (titular === 'persona natural' && mas_de_un_establecimiento === 'si') {
      return true;
    }

    if (titular === 'persona natural' && la_actividad_economica === 'si') {
      return true;
    }
    if (
      titular === 'persona natural' &&
      Number(gravadas_con_iva.replace(/\$|,/g, '')) >= tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      titular === 'persona natural' &&
      Number(total_ingresos_brutos_2.replace(/\$|,/g, '')) >=
        tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      titular === 'persona natural' &&
      Number(gravadas_con_iva_2.replace(/\$|,/g, '')) >= tresmilquinientosuvt &&
      Number(gravadas_con_iva.replace(/\$|,/g, '') >= tresmilquinientosuvt)
    ) {
      return true;
    }

    return false;
  }

  public viewButtonSeven() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    const {
      patrimonio_bruto_anterior,
      patrimonio_bruto_presente,
      total_ingreso_uno,
      total_ingresos_brutos_2,
    } = getResponseThree(window.localStorage.getItem('response-Three') || '');
    const { otros_ingresos, actividad_gravada_iva, realizo_compras_consumo } =
      getActividadEconomica(
        window.localStorage.getItem('formulario_sobre_actividad_economica') ||
          ''
      );

    const cuatromilquinientosuvt = Number('$211,792,500'.replace(/\$|,/g, ''));
    const milcuatrocientosuvt = Number('$65,891,000'.replace(/\$|,/g, ''));

    if (titular === 'persona juridica') {
      return true;
    }

    if (
      Number(patrimonio_bruto_anterior.replace(/\$|,/g, '')) >=
      cuatromilquinientosuvt
    ) {
      return true;
    }

    if (
      Number(patrimonio_bruto_presente.replace(/\$|,/g, '')) >=
      cuatromilquinientosuvt
    ) {
      return true;
    }

    if (
      Number(total_ingreso_uno.replace(/\$|,/g, '')) >= milcuatrocientosuvt ||
      Number(total_ingresos_brutos_2.replace(/\$|,/g, '')) >=
        milcuatrocientosuvt
    ) {
      return true;
    }
    const totales = Number(otros_ingresos) + Number(actividad_gravada_iva);
    if (totales >= milcuatrocientosuvt) {
      return true;
    }

    if (realizo_compras_consumo === 'si') {
      return true;
    }
    return false;
  }

  public viewButtonEigth() {
    const { titular } = getCaracterizacion(
      window.localStorage.getItem('caracterizacion_de_negocio') || ''
    );
    const {
      corresponde_actividad_restaurante,
      corresponde_una_franquicia,
      esta_con_iva,
    } = getActividadEconomicaAformalizar(
      window.localStorage.getItem('actividad_economica_a_formalizar') || ''
    );

    const { gravadas_con_iva, gravadas_con_iva_2 } = getResponseThree(
      window.localStorage.getItem('response-Three') || ''
    );
    const {
      mas_de_un_establecimiento,
      la_actividad_economica,
      otros_ingresos,
      actividad_gravada_iva,
    } = getActividadEconomica(
      window.localStorage.getItem('formulario_sobre_actividad_economica') || ''
    );

    const tresmilquinientosuvt = Number('$164,727,500'.replace(/\$|,/g, ''));

    if (titular === 'persona juridica') {
      return true;
    }

    if (
      corresponde_actividad_restaurante === 'si' &&
      corresponde_una_franquicia === 'si'
    ) {
      return true;
    }

    if (
      esta_con_iva === 'si' &&
      (Number(gravadas_con_iva.replace(/\$|,/g, '')) >= tresmilquinientosuvt ||
        Number(gravadas_con_iva_2.replace(/\$|,/g, '')) >= tresmilquinientosuvt)
    ) {
      return true;
    }

    if (mas_de_un_establecimiento === 'si') {
      return true;
    }

    const total = Number(otros_ingresos) + Number(actividad_gravada_iva);
    if (total >= tresmilquinientosuvt) {
      return true;
    }

    if (
      Number(gravadas_con_iva.replace(/\$|,/g, '')) >= tresmilquinientosuvt ||
      Number(gravadas_con_iva_2.replace(/\$|,/g, '')) >= tresmilquinientosuvt ||
      la_actividad_economica === 'si'
    ) {
      return true;
    }

    return false;
  }

  public viewButtonNine() {
    const data = window.localStorage.getItem('caracterizacion_de_negocio');
    const data2 = window.localStorage.getItem(
      'actividad_economica_a_formalizar'
    );

    const profesion = JSON.parse(data || '').negocio.value;
    const titular = JSON.parse(data || '').titular.value;
    const restaurante = JSON.parse(data2 || '')[0].value;

    if (
      profesion === 'profesion liberal o artistica' ||
      profesion === 'comercial'
    ) {
      return true;
    }
    if (titular === 'persona juridica' && restaurante === 'si') {
      return true;
    }

    return false;
  }

  public viewButtonTen() {
    const data = window.localStorage.getItem(
      'formulario_sobre_actividad_economica'
    );

    const data2 = window.localStorage.getItem(
      'actividad_economica_a_formalizar'
    );

    const data3 = window.localStorage.getItem('response-Three');

    const restaurante = JSON.parse(data2 || '')[0].value;
    const marcas = JSON.parse(data2 || '')[2].value;
    const establecimientos = JSON.parse(data || '')[0].value;
    const otros_uno = JSON.parse(data3 || '')[6].value;
    const otros_dos = JSON.parse(data3 || '')[11].value;

    const tresmilquinientosuvt = Number('$164,727,500'.replace(/\$|,/g, ''));

    if (restaurante === 'si' && marcas === 'si') {
      return true;
    }
    if (establecimientos === 'si' && restaurante === 'si') {
      return true;
    }

    if (
      restaurante === 'si' &&
      Number(otros_uno.replace(/\$|,/g, '')) >= tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      restaurante === 'si' &&
      Number(otros_dos.replace(/\$|,/g, '')) >= tresmilquinientosuvt
    ) {
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

    const doc = new jsPDF('p', 'pt', 'a4');
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
export default FormSieteComponent;
