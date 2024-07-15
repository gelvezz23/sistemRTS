import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoFormalizacionComponent } from '.';

describe('ResultadoFormalizacionComponent', () => {
  let component: ResultadoFormalizacionComponent;
  let fixture: ComponentFixture<ResultadoFormalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoFormalizacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoFormalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
