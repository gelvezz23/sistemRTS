import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSieteComponent } from '.';

describe('FormSieteComponent', () => {
  let component: FormSieteComponent;
  let fixture: ComponentFixture<FormSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSieteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
