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

  public viewimage() {
    if (this.quest.id === 2) {
      return true;
    }
    if (this.quest.id === 3) {
      return true;
    }
    if (this.quest.id === 4) {
      return true;
    }
    if (this.quest.id === 6) {
      return true;
    }
    if (this.quest.id === 7) {
      return true;
    }
    if (this.quest.id === 8) {
      return true;
    }
    return false;
  }
}
