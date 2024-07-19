import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SaveDataService } from '../../../../Infraestructure/saveData/save-data.service';
import { FormularioDosComponent } from './';
import { ModalComponent } from '../../components/modal';
import { DisclaimerComponent } from '../../components/disclaimer';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarBgBlackComponent } from '../../components/navbar-bg-black/navbar-bg-black.component';
import { HttpClientModule } from '@angular/common/http';

describe('FormularioDosComponent', () => {
  let component: FormularioDosComponent;
  let fixture: ComponentFixture<FormularioDosComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let saveDataServiceSpy: jasmine.SpyObj<SaveDataService>;

  beforeEach(async () => {
    const router = jasmine.createSpyObj('Router', ['navigate']);
    const saveDataService = jasmine.createSpyObj('SaveDataService', [
      'getSaveQuestions',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        FormularioDosComponent,
        ModalComponent,
        DisclaimerComponent,
        LoadingComponent,
        HttpClientModule,
        NavbarBgBlackComponent,
      ],
      providers: [
        CurrencyPipe,
        { provide: Router, useValue: router },
        { provide: SaveDataService, useValue: saveDataService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioDosComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    saveDataServiceSpy = TestBed.inject(
      SaveDataService
    ) as jasmine.SpyObj<SaveDataService>;

    // Mocking localStorage
    spyOn(window.localStorage, 'getItem').and.callFake((key: string) => {
      switch (key) {
        case 'caracterizacion_de_negocio':
          return JSON.stringify({ titular: { value: 'persona natural' } });
        case 'token':
          return 'some-token';
        default:
          return null;
      }
    });

    spyOn(window.localStorage, 'setItem').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAnswer', () => {
    it('should update question value and call saveLocalStorage', () => {
      spyOn(component, 'saveLocalStorage');

      const initialQuestion = component.questions[0];
      component.getAnswer('test value', initialQuestion.id);

      expect(component.questions[0].value).toBe('test value');
      expect(component.saveLocalStorage).toHaveBeenCalled();
    });
  });

  describe('updateValue', () => {
    it('should update cantidad and call getAnswer for id 26', () => {
      spyOn(component, 'getAnswer');

      const event = { value: '1234' };
      component.updateValue(event, 26);

      expect(component.cantidad).toBe('$1,234');
      expect(component.getAnswer).toHaveBeenCalledWith('1234', 26);
    });

    it('should update cantidadDos and call getAnswer for id 27', () => {
      spyOn(component, 'getAnswer');

      const event = { value: '5678' };
      component.updateValue(event, 27);

      expect(component.cantidadDos).toBe('$5,678');
      expect(component.getAnswer).toHaveBeenCalledWith('5678', 27);
    });
  });

  describe('filtrarNumero', () => {
    it('should allow only numeric and control keys', () => {
      const event = new KeyboardEvent('keydown', { key: '1' });
      expect(component.filtrarNumero(event)).toBe(true);
    });

    it('should prevent non-numeric keys', () => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      spyOn(event, 'preventDefault');
      component.filtrarNumero(event);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });
});
