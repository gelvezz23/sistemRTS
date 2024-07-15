import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioDosComponent } from '.';

describe('FormularioDosComponent', () => {
  let component: FormularioDosComponent;
  let fixture: ComponentFixture<FormularioDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
