import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormSieteComponent } from './';
import { NavbarTwoComponent } from '../../components/navbar-two';
import { localStorageMock } from '../../utils/mocks/localStorageMock';

describe('FormSieteComponent', () => {
  let component: FormSieteComponent;
  let fixture: ComponentFixture<FormSieteComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);
    spyOnProperty(window, 'localStorage', 'get').and.returnValue(
      localStorageMock
    );
    await TestBed.configureTestingModule({
      imports: [FormSieteComponent, NavbarTwoComponent],
      providers: [{ provide: Router, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSieteComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('viewButtonOne', () => {
    it('should return true if titular is not persona natural and negocio is not profesion liberal o artistica', () => {
      spyOn(window.localStorage, 'getItem').and.returnValue(
        JSON.stringify({ titular: 'persona juridica', negocio: 'comercial' })
      );
      expect(component.viewButtonOne()).toBeTrue();
    });

    it('should return false if titular is persona natural or negocio is profesion liberal o artistica', () => {
      spyOn(window.localStorage, 'getItem').and.returnValue(
        JSON.stringify({
          titular: 'persona natural',
          negocio: 'profesion liberal o artistica',
        })
      );
      expect(component.viewButtonOne()).toBeTrue();
    });
  });

  it('should navigate to beneficio when handleClick is called', () => {
    component.handleClick();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['beneficio']);
  });

  // Add more tests for screenShot if needed
});
