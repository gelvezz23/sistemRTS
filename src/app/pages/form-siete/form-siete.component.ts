import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two/navbar-two.component';

@Component({
  selector: 'app-form-siete',
  standalone: true,
  templateUrl: './form-siete.component.html',
  styleUrl: './form-siete.component.scss',
  imports: [NavbarTwoComponent],
})
export class FormSieteComponent {
  constructor(private router: Router) {}

  public viewButtonOne() {
    const data = window.localStorage.getItem('caracterizacion_de_negocio');
    const titular = JSON.parse(data || '').titular.value;
    const negocio = JSON.parse(data || '').negocio.value;

    if (
      titular !== 'persona natural' &&
      negocio !== 'profesion liberal o artistica'
    ) {
      return true;
    }
    return false;
  }

  public viewButtonFive() {
    const data = window.localStorage.getItem('caracterizacion_de_negocio');
    const data2 = window.localStorage.getItem(
      'formulario_sobre_actividad_economica'
    );
    const data3 = window.localStorage.getItem('response-Three');

    const titular = JSON.parse(data || '').titular.value;

    const mas_de_un_establecimiento = JSON.parse(data2 || '')[0].value;
    const la_actividad_economica = JSON.parse(data2 || '')[4].value;

    const gravadas_con_iva = JSON.parse(data3 || '')[2].value;
    const total_ingresos_brutos_2 = JSON.parse(data3 || '')[10].value;
    const gravadas_con_iva_2 = JSON.parse(data3 || '')[7].value;
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
    const data = window.localStorage.getItem('caracterizacion_de_negocio');
    const data2 = window.localStorage.getItem(
      'formulario_sobre_actividad_economica'
    );
    const titular = JSON.parse(data || '').titular.value;
    const data3 = window.localStorage.getItem('response-Three');
    const patrimonio_bruto_anterior = JSON.parse(data3 || '')[0].value;
    const patrimonio_bruto_presente = JSON.parse(data3 || '')[1].value;
    const total_ingreso_uno = JSON.parse(data3 || '')[6].value;
    const total_ingreso_dos = JSON.parse(data3 || '')[10].value;
    const otros_ingresos = JSON.parse(data2 || '')[2].value;
    const actividad_gravada_iva = JSON.parse(data2 || '')[1].value;
    const realizo_compras_consumo = JSON.parse(data2 || '')[3].value;

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
      Number(total_ingreso_dos.replace(/\$|,/g, '')) >= milcuatrocientosuvt
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
    const data = window.localStorage.getItem('caracterizacion_de_negocio');
    const data2 = window.localStorage.getItem(
      'actividad_economica_a_formalizar'
    );
    const data3 = window.localStorage.getItem('response-Three');
    const data4 = window.localStorage.getItem(
      'formulario_sobre_actividad_economica'
    );

    const titular = JSON.parse(data || '').titular.value;
    const corresponde_actividad_restaurante = JSON.parse(data2 || '')[0].value;
    const corresponde_una_franquicia = JSON.parse(data2 || '')[1].value;
    const esta_con_iva = JSON.parse(data2 || '')[4].value;
    const gravada_con_iva = JSON.parse(data3 || '')[2].value;
    const gravada_con_iva_dos = JSON.parse(data3 || '')[7].value;
    const establecimiento = JSON.parse(data4 || '')[0].value;
    const la_actividad_economica = JSON.parse(data4 || '')[4].value;
    const otros = JSON.parse(data4 || '')[2].value;
    const monto = JSON.parse(data4 || '')[1].value;

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
      (Number(gravada_con_iva.replace(/\$|,/g, '')) >= tresmilquinientosuvt ||
        Number(gravada_con_iva_dos.replace(/\$|,/g, '')) >=
          tresmilquinientosuvt)
    ) {
      return true;
    }

    if (establecimiento === 'si') {
      return true;
    }

    const total = Number(otros) + Number(monto);
    if (total >= tresmilquinientosuvt) {
      return true;
    }

    if (
      Number(gravada_con_iva.replace(/\$|,/g, '')) >= tresmilquinientosuvt ||
      Number(gravada_con_iva_dos.replace(/\$|,/g, '')) >=
        tresmilquinientosuvt ||
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
}
