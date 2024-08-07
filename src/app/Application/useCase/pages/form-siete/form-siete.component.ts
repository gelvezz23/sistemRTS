import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { getCaracterizacion } from '../form-cinco/utils/caracterizacionDeNegocio/getCaracterizacion';
import { getActividadEconomica } from './utils/getActividadEconomica';
import { getResponseThree } from './utils/getResponseThree';
import { getActividadEconomicaAformalizar } from './utils/getActividadEconomicaAformalizar';
import { formatedResponse } from '../../utils/formatedResponse';
import { getNegocioEstaFormalizado } from './utils/getNegocioEstaFormalizado';

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

    const data2 = window.localStorage.getItem('negocio_esta_formalizado') || '';

    const { titular, negocio } = getCaracterizacion(data);
    const {
      tiene_registro_mercantil,
      renueva_el_registro_mercantil_cada_anio,
    } = getNegocioEstaFormalizado(data2);

    if (tiene_registro_mercantil === 'no') {
      return true;
    }
    if (
      tiene_registro_mercantil === 'si' &&
      renueva_el_registro_mercantil_cada_anio === 'no'
    ) {
      return true;
    }

    if (
      titular === 'persona natural' &&
      negocio === 'agricultura o ganaderia'
    ) {
      return false;
    }
    if (
      titular !== 'persona natural' &&
      negocio !== 'profesion liberal o artistica'
    ) {
      return true;
    }
    return false;
  }

  public viewButtonFive() {
    const caracterizacion =
      window.localStorage.getItem('caracterizacion_de_negocio') || '';
    const actividadEconomica =
      window.localStorage.getItem('formulario_sobre_actividad_economica') || '';

    const responseThree = window.localStorage.getItem('response-Three') || '';
    const { titular } = getCaracterizacion(caracterizacion);
    const { mas_de_un_establecimiento, la_actividad_economica } =
      getActividadEconomica(actividadEconomica);

    const { gravadas_con_iva, total_ingresos_brutos_2, gravadas_con_iva_2 } =
      getResponseThree(responseThree);
    const tresmilquinientosuvt = Number(formatedResponse('$164,727,500'));

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
      Number(formatedResponse(gravadas_con_iva)) >= tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      titular === 'persona natural' &&
      Number(formatedResponse(total_ingresos_brutos_2)) >= tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      titular === 'persona natural' &&
      Number(formatedResponse(gravadas_con_iva_2)) >= tresmilquinientosuvt &&
      Number(formatedResponse(gravadas_con_iva) >= tresmilquinientosuvt)
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

    const cuatromilquinientosuvt = Number(formatedResponse('$211,792,500'));
    const milcuatrocientosuvt = Number(formatedResponse('$65,891,000'));

    if (titular === 'persona juridica' || titular === 'persona natural') {
      return true;
    }

    if (
      Number(formatedResponse(patrimonio_bruto_anterior)) >=
      cuatromilquinientosuvt
    ) {
      return true;
    }

    if (
      Number(formatedResponse(patrimonio_bruto_presente)) >=
      cuatromilquinientosuvt
    ) {
      return true;
    }

    if (
      Number(formatedResponse(total_ingreso_uno)) >= milcuatrocientosuvt ||
      Number(formatedResponse(total_ingresos_brutos_2)) >= milcuatrocientosuvt
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

    const tresmilquinientosuvt = Number(formatedResponse('$164,727,500'));

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
      (Number(formatedResponse(gravadas_con_iva)) >= tresmilquinientosuvt ||
        Number(formatedResponse(gravadas_con_iva_2)) >= tresmilquinientosuvt)
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
      Number(formatedResponse(gravadas_con_iva)) >= tresmilquinientosuvt ||
      Number(formatedResponse(gravadas_con_iva_2)) >= tresmilquinientosuvt ||
      la_actividad_economica === 'si'
    ) {
      return true;
    }

    return false;
  }

  public viewButtonNine() {
    const data = localStorage.getItem('caracterizacion_de_negocio') || '';
    const data2 = localStorage.getItem('actividad_economica_a_formalizar');
    const { negocio, titular } = getCaracterizacion(data);
    const restaurante = JSON.parse(data2 || '')[0].value;

    if (
      negocio === 'profesion liberal o artistica' ||
      negocio === 'comercial'
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

    const tresmilquinientosuvt = Number(formatedResponse('$164,727,500'));

    if (restaurante === 'si' && marcas === 'si') {
      return true;
    }
    if (establecimientos === 'si' && restaurante === 'si') {
      return true;
    }

    if (
      restaurante === 'si' &&
      Number(formatedResponse(otros_uno)) >= tresmilquinientosuvt
    ) {
      return true;
    }

    if (
      restaurante === 'si' &&
      Number(formatedResponse(otros_dos)) >= tresmilquinientosuvt
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
export default FormSieteComponent;
