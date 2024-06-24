import { Component, Input } from '@angular/core';
import { SafePipe } from '../../safe.pipe';
import { serviciosExcluidos } from './application/useCase/serviciosExcluidos';
import { bienesExcluidos } from './application/useCase/bienesExcluidos';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  [x: string]: any;
  public bienesExcluidos: string[];
  public serviciosExcluidos: string[];
  filtroNombre: string = '';
  filtroNombreDos: string = '';
  showList: boolean = false;
  showListDos: boolean = false;
  matchingSearch: string[] = [];
  matchingSearchDos: string[] = [];
  @Input({ required: true }) modalTitle!: string;
  @Input({ required: true }) modalContent!: string;
  @Input({ required: true }) id!: number | string;

  constructor() {
    this.serviciosExcluidos = serviciosExcluidos;
    this.bienesExcluidos = bienesExcluidos;
  }

  getItems(target: any) {
    const value = (target.value || '').toLowerCase();
    this.showList = value !== '';
    if (this.showList) {
      this.matchingSearch = this.bienesExcluidos.filter((items) =>
        items.toLowerCase().includes(value)
      );
    }
  }

  getItemsDos(target: any) {
    const value = (target.value || '').toLowerCase();
    this.showListDos = value !== '';
    if (this.showListDos) {
      this.matchingSearchDos = this.serviciosExcluidos.filter((items) =>
        items.toLowerCase().includes(value)
      );
    }
  }

  filtroNombreChangeDos(target: any) {
    this.filtroNombreDos = target.value;
  }

  filtroNombreChange(target: any) {
    this.filtroNombre = target.value;
  }
}
