import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './Application/useCase/components/footer';
import { GovconavbarComponent } from './Application/useCase/components/govconavbar';
import { NavbarComponent } from './Application/useCase/components/navbar';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    GovconavbarComponent,
  ],
})
export class AppComponent {
  title = 'sistema RTS | Dian';
  fontSize: number = 16; // Initial font size

  constructor() {}

  increaseFontSize() {
    const htmlElement = document.documentElement;
    if (this.fontSize <= 24) {
      this.fontSize += 2;
      htmlElement.style.fontSize = `${this.fontSize}px`;
    }
  }

  decreaseFontSize() {
    const htmlElement = document.documentElement;
    if (this.fontSize >= 14) {
      this.fontSize -= 2;
      htmlElement.style.fontSize = `${this.fontSize}px`;
    }
  }

  toggleHighContrast() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('altoContraste');
  }

  private updateFontSize() {
    // Update font size using Angular's binding mechanism
    // (e.g., in the template: <html [style.fontSize.px]="fontSize">)
  }
}
