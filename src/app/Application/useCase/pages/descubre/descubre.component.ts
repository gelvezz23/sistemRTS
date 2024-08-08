import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LastnavbarComponent } from '../../components/lastnavbar/lastnavbar.component';

@Component({
  selector: 'app-descubre',
  standalone: true,
  templateUrl:
    './../../../../Presentation/pages/descubre/descubre.component.html',
  styleUrl: './../../../../Presentation/pages/descubre/descubre.component.scss',
  imports: [LastnavbarComponent],
})
class DescubreComponent {
  constructor(private router: Router) {}

  public handleClick() {
    this.router.navigate(['/']);
  }
}

export default DescubreComponent;
