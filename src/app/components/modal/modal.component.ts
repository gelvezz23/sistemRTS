import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input({ required: true }) modalTitle!: string;
  @Input({ required: true }) modalContent!: string;
  @Input({ required: true }) id!: number;
  public imprimir() {
    console.log(this.modalContent);
    console.log(this.modalTitle);
  }

  ngOnInit() {
    this.imprimir();
  }
}
