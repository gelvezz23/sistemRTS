import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitacionesComponent } from '.';

describe('FelicitacionesComponent', () => {
  let component: FelicitacionesComponent;
  let fixture: ComponentFixture<FelicitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelicitacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FelicitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
