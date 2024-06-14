import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudanosComponent } from './ayudanos.component';

describe('AyudanosComponent', () => {
  let component: AyudanosComponent;
  let fixture: ComponentFixture<AyudanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyudanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
