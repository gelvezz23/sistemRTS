import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDosComponent } from '.';

describe('InfoDosComponent', () => {
  let component: InfoDosComponent;
  let fixture: ComponentFixture<InfoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
