import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input({ required: true }) quest!: any;
}
