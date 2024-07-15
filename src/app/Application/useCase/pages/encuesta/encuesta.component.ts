import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { RatingComponent } from '../../components/rating';
import { questionsData } from './questions';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { adapterToken } from '../../../adapters/adapterToken';
import { AdapterEncuesta } from '../../../adapters/adapterEncuesta';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/encuesta/encuesta.component.html',
  styleUrl: './../../../../Presentation/pages/encuesta/encuesta.component.scss',
  imports: [
    RatingComponent,
    NavbarTwoComponent,
    HttpClientModule,
    LoadingComponent,
  ],
})
class EncuestaComponent {
  constructor(private router: Router, private serviceSaveDa: SaveDataService) {}

  questions = questionsData;
  loading = false;
  error = '';
  public getAnswer($event: string | any, id: number): void {
    const value = id !== 46 ? $event : $event.target.value;
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }
  }

  public handleClick() {
    this.loading = true;
    window.localStorage.setItem('encuesta', JSON.stringify(this.questions));

    const token = adapterToken(localStorage.getItem('token') || '');
    const dataAdapted = AdapterEncuesta(this.questions, token);

    this.serviceSaveDa.getSaveQuestions(dataAdapted).subscribe({
      next: (response) => {
        if (response) {
          this.loading = false;
          this.error = '';
          this.router.navigate(['descubre']);
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
export default EncuestaComponent;
