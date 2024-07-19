import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../components/modal';
import { AnswersInfoDos } from '../../../../Domain/pages/info-dos';
import { adapterToken } from '../../../adapters/adapterToken';
import { InfoDosAdapter } from '../../../adapters/infoDosAnswer';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';
@Component({
  selector: 'app-info-dos',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/info-dos/info-dos.component.html',
  styleUrl: './../../../../Presentation/pages/info-dos/info-dos.component.scss',
  imports: [
    ModalComponent,
    FormsModule,
    HttpClientModule,
    LoadingComponent,
    NavbarBgBlackComponent,
  ],
})
class InfoDosComponent {
  loading = false;
  error = '';
  mensaje: string = '';
  mensajeDos: string = `Marque “actividad comercial” cuando la actividad que se realiza constituye el
ejercicio de un acto mercantil del artículo 20 del Código de Comercio. Son
comerciales las actividades de transporte de personas y cosas (como los

servicios de transporte por plataformas, taxis, intermunicipal, etc); de
arrendamiento o comercialización e bienes, como las tiendas, minimercados,
puestos de venta y similares; las de prestación de servicios como el expendio de
comidas (restaurantes, panaderías y simulares), de depósito de bienes (como
parqueaderos y bodegas), de transformación o manufactura de bienes, las
peluquerías, las empresas de construcción, reparación, compra y venta de
vehículos para el transporte, como los talleres mecánicos. Todas las actividades
realizas a través de personas jurídicas como sociedades anónimas se consideran
comerciales.`;

  titular: AnswersInfoDos = {
    id: 7,
    value: '',
    error: false,
    quest: 'Titular del negocio',
  };
  negocio: AnswersInfoDos = {
    id: 8,
    value: '',
    error: false,
    quest: 'Clasifique el negocio de acuerdo con su actividad',
  };
  trabajadores: AnswersInfoDos = {
    id: 9,
    value: '',
    error: false,
    quest: '¿Emplea trabajadores?',
  };

  constructor(private router: Router, private serviceSaveDa: SaveDataService) {}
  data = {
    titular: this.titular,
    negocio: this.negocio,
    trabajadores: this.trabajadores,
  };
  public saveLocalStorage() {
    localStorage.setItem(
      'caracterizacion_de_negocio',
      JSON.stringify(this.data)
    );
  }

  public handleClick() {
    this.loading = true;

    this.validateValues();
    if (this.titular.error || this.negocio.error || this.trabajadores.error) {
    } else {
      const token = adapterToken(localStorage.getItem('token') || '');
      const dataAdapted = InfoDosAdapter([this.data], token);

      this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
        next: (response) => {
          this.loading = false;
          if (response) {
            setTimeout(() => this.router.navigate(['form6']), 1000);
            this.saveLocalStorage();
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

export default InfoDosComponent;
