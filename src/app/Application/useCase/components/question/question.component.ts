import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [],
  templateUrl:
    './../../../../Presentation/components/question/question.component.html',
  styleUrl:
    './../../../../Presentation/components/question/question.component.scss',
})
class QuestionComponent {
  @Input({ required: true }) quest!: any;

  public viewimage() {
    if (this.quest.id === 18) {
      return true;
    }
    if (this.quest.id === 19) {
      return true;
    }
    if (this.quest.id === 20) {
      return true;
    }
    if (this.quest.id === 22) {
      return true;
    }
    if (this.quest.id === 23) {
      return true;
    }
    if (this.quest.id === 24) {
      return true;
    }
    return false;
  }
}

export default QuestionComponent;
