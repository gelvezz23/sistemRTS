import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormularioComponent } from '../formulario';
import { RecaptchaService } from '../../../../Infraestructure/recaptcha/recaptcha.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';
import { adapterToken } from '../../../adapters/adapterToken';
import { generateRandomString } from '../../utils/generateToken';
import { FirstnavbarComponent } from '../../components/firstnavbar/firstnavbar.component';
import { environment } from 'environments/environment';
import { FormsttedValuesService } from 'app/Infraestructure/formatedValues/formstted-values.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './../../../../Presentation/pages/home/home.component.html',
  styleUrl: './../../../../Presentation/pages/home/home.component.scss',
  imports: [
    FormularioComponent,
    RecaptchaModule,
    HttpClientModule,
    LoadingComponent,
    FirstnavbarComponent,
  ],
})
class HomeComponent implements OnInit {
  error = '';
  loading = false;
  viewRecaptcha = false;
  enabledCaptcha = window.localStorage.getItem('enabled_captchap') || false;
  public readonly recaptcha = environment.recaptcha;
  constructor(
    private router: Router,
    private recaptchaService: RecaptchaService
  ) {}
  ngOnInit() {
    localStorage.clear();
    console.log(environment.recaptcha);
    console.log(this.enabledCaptcha);
  }
  resolved(captchaResponse: any) {
    this.loading = true;
    this.error = '';

    if (captchaResponse) {
      this.recaptchaService.getVerificationCaptcha(captchaResponse).subscribe({
        next: (response: string) => {
          this.loading = false;
          this.error = '';
          if (response !== 'Token is invalid') {
            const token = adapterToken(captchaResponse);
            localStorage.setItem('token', token);
            setTimeout(() => this.router.navigate(['info']), 1000);
          } else {
            this.error = 'Verification failed. Please try again.';
          }
        },
        error: (error) => {
          console.error('Error response:', error);
          this.error = error.message || 'An unexpected error occurred';
          this.loading = false;
        },
        complete: () => {
          console.log('Verification complete');
        },
      });
    }
  }

  public handleClick() {
    if (this.enabledCaptcha) {
      this.viewRecaptcha = true;
    } else {
      const dataToken = generateRandomString(200);
      window.localStorage.setItem('token', dataToken);
      this.router.navigate(['/info']);
    }
  }
}

export default HomeComponent;
