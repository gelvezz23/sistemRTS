import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuatroComponent } from './form-cuatro.component';

describe('FormCuatroComponent', () => {
  let component: FormCuatroComponent;
  let fixture: ComponentFixture<FormCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
