import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  ratingValue: number = 0;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id_1!: string;
  @Input({ required: true }) id_2!: string;
  @Input({ required: true }) id_3!: string;
  @Input({ required: true }) id_4!: string;
  @Input({ required: true }) id_5!: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  public getAnswer(value: number) {
    this.ratingValue = value;
    this.valueResponse.emit(value.toString());
  }
}
