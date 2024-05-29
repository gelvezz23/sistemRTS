import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeisComponent } from './form-seis.component';

describe('FormSeisComponent', () => {
  let component: FormSeisComponent;
  let fixture: ComponentFixture<FormSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSeisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
