import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnavbarComponent } from './lastnavbar.component';

describe('LastnavbarComponent', () => {
  let component: LastnavbarComponent;
  let fixture: ComponentFixture<LastnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
