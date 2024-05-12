import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTresComponent } from './info-tres.component';

describe('InfoTresComponent', () => {
  let component: InfoTresComponent;
  let fixture: ComponentFixture<InfoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
