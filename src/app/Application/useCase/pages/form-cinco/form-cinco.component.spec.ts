import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormCincoComponent } from './';
import { NavbarTwoComponent } from '../../components/navbar-two';

describe('FormCincoComponent', () => {
  let component: FormCincoComponent;
  let fixture: ComponentFixture<FormCincoComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCincoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate'); // Spy on router navigate method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct validation for viewButtonOne', () => {
    window.localStorage.setItem(
      'caracterizacion_de_negocio',
      JSON.stringify({
        titular: 'persona natural',
        negocio: 'comercial',
      })
    );
    const result = component.viewButtonOne();
    expect(result).toBe(true);
  });

  it('should navigate to "beneficio" when handleClick is called', () => {
    component.handleClick();
    expect(router.navigate).toHaveBeenCalledWith(['beneficio']);
  });

  // Add more tests for other public methods like viewButtonFour, viewButtonFive, etc.
});
