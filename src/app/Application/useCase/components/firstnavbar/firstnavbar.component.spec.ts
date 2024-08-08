import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnavbarComponent } from './firstnavbar.component';

describe('FirstnavbarComponent', () => {
  let component: FirstnavbarComponent;
  let fixture: ComponentFixture<FirstnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
