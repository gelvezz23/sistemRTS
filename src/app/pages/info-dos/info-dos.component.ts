import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-info-dos',
  standalone: true,
  templateUrl: './info-dos.component.html',
  styleUrl: './info-dos.component.scss',
  imports: [ModalComponent, FormsModule],
})
export class InfoDosComponent {
  mensaje: string =
    'persona jurídica” cuando la actividad económica se desarrolle a través de una sociedad, por ejemplo, una Sociedad Anónima Simplificada (S.A.S) o seleccione “persona natural” cuando actúes directamente sin utilizar una sociedad';
  mensajeDos: string = `Comercial: cuando la actividad que se realiza tiene carácter comercial, porque constituye el ejercicio de un acto mercantil del artículo 20 del Código de Comercio. Seguramente será comercial tu actividad si desarrollas actividades de transporte de personas y cosas (como los servicios de transporte por plataformas, taxis, intermunicipal), de arrendamiento o comercialización de bienes, de prestación de servicios (como el expendio de comidas-restaurantes, panaderías y similares-), de depósito de bienes (como parqueaderos y bodegas), de transformación, peluquerías,
  manufactura y circulación de bienes (fábricas), compra y venta de bienes (tiendas, minimercados, puestos de venta
  de artesanías y similares), las empresas de construcción, reparación, compra y venta de vehículos para el transporte
  por tierra, agua y aire, y sus accesorios (como los talleres mecánicos). Todas las actividades desarrolladas a través
  de personas jurídicas serán comerciales a efectos de esta encuesta`;

  titular: { value: string; error: boolean; quest: string } = {
    value: '',
    error: false,
    quest: '',
  };
  negocio: { value: string; error: boolean; quest: string } = {
    value: '',
    error: false,
    quest: '',
  };
  trabajadores: { value: string; error: boolean; quest: string } = {
    value: '',
    error: false,
    quest: '',
  };

  constructor(private router: Router) {}

  public saveLocalStorage() {
    const data = {
      titular: this.titular,
      negocio: this.negocio,
      trabajadores: this.trabajadores,
    };
    localStorage.setItem('caracterizacion_de_negocio', JSON.stringify(data));
  }

  public handleClick() {
    this.validateValues();
    if (this.titular.error || this.negocio.error || this.trabajadores.error) {
    } else {
      this, this.saveLocalStorage();
      this.router.navigate(['form6']);
    }
  }

  public getAnswer = ($event: any, id: number, quest: string) => {
    const value = $event.target.value;
    if (id === 1) {
      this.titular.value = value;
      this.titular.quest = quest;
      if (value === 'persona juridica') {
        this.negocio.value = 'comercial';
      }
    }
    if (id === 2) {
      this.negocio.value = value;
      this.negocio.quest = quest;
    }
    if (id === 3) {
      this.trabajadores.value = value;
      this.trabajadores.quest = quest;
    }
  };

  public validateValues = () => {
    if (this.titular.value === '') {
      this.titular.error = true;
    } else {
      this.titular.error = false;
    }
    if (this.negocio.value === '') {
      this.negocio.error = true;
    } else {
      this.negocio.error = false;
    }
    if (this.trabajadores.value === '') {
      this.trabajadores.error = true;
    } else {
      this.trabajadores.error = false;
    }
  };
}
