import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCincoComponent } from './form-cinco.component';

describe('FormCincoComponent', () => {
  let component: FormCincoComponent;
  let fixture: ComponentFixture<FormCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
