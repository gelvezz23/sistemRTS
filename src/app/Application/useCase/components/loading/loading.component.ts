import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl:
    './../../../../Presentation/components/loading/loading.component.html',
  styleUrl:
    './../../../../Presentation/components/loading/loading.component.scss',
})
export class LoadingComponent {
  @Input({ required: true }) loading!: boolean;
}
