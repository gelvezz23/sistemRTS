import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoFormalizacionComponent } from './'; // Asegúrate de que la ruta al componente sea correcta
import { localStorageMock } from '../../utils/mocks/localStorageMock';
import { NavbarTwoComponent } from '../../components/navbar-two';

describe('ResultadoFormalizacionComponent', () => {
  let component: ResultadoFormalizacionComponent;
  let fixture: ComponentFixture<ResultadoFormalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoFormalizacionComponent],
    }).compileComponents();

    spyOnProperty(window, 'localStorage', 'get').and.returnValue(
      localStorageMock
    );

    fixture = TestBed.createComponent(ResultadoFormalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should count formalizado items correctly', () => {
    component.formalizado = [
      { value: 'si' },
      { value: 'no' },
      { value: '' },
      { value: 'si' },
    ];
    component.getResultTotal();
    expect(component.count).toBe(10); // Correct the expected count based on the logic
  });
});
