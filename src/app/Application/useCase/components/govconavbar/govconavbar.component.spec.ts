import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovconavbarComponent } from '.';

describe('GovconavbarComponent', () => {
  let component: GovconavbarComponent;
  let fixture: ComponentFixture<GovconavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovconavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovconavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
