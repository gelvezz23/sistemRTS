import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormularioComponent } from '../formulario';
import { NavbarComponent } from '../../components/navbar';
import { RecaptchaService } from '../../../../Infraestructure/recaptcha/recaptcha.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';
import { adapterToken } from '../../../adapters/adapterToken';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './../../../../Presentation/pages/home/home.component.html',
  styleUrl: './../../../../Presentation/pages/home/home.component.scss',
  imports: [
    FormularioComponent,
    RecaptchaModule,
    NavbarComponent,
    HttpClientModule,
    LoadingComponent,
  ],
})
class HomeComponent {
  error = '';
  loading = false;
  viewRecaptcha = false;
  //test 6LeL20YUAAAAAB43haRm-v93jNxwi7EBraClHUgX
  // 6LdB5QAqAAAAAHYSYRSKHVYCSivYmz9WIDsIBVBU
  public readonly recaptcha = '6LfPTd8mAAAAAI8JTLzFdG0jOUfWe12EkX67xcAt';
  constructor(
    private router: Router,
    private recaptchaService: RecaptchaService
  ) {}

  resolved(captchaResponse: any) {
    this.loading = true;
    this.error = '';

    if (captchaResponse) {
      setTimeout(() => this.router.navigate(['info']), 1000);
      /* this.recaptchaService.getVerificationCaptcha(captchaResponse).subscribe({
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
       */
    }
  }

  public handleClick() {
    const token = adapterToken(Math.random().toString(36).substr(2));
    localStorage.setItem('token', token);
    setTimeout(() => this.router.navigate(['info']), 1000);

    this.viewRecaptcha = true;
  }
}

export default HomeComponent;
