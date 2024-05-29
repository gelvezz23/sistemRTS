import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  imports: [FormularioComponent, FormularioComponent, RecaptchaModule],
})
export class HomeComponent {
  [x: string]: any;
  viewRecaptcha = false;
  constructor(private router: Router) {}

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if (captchaResponse) {
      setTimeout(() => this.router.navigate(['info']), 1000);
    }
  }

  public handleClick() {
    this.viewRecaptcha = true;
  }
}
