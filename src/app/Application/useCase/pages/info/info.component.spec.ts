import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComponent } from '.';
import { localStorageMock } from '../../utils/mocks/localStorageMock';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent],
    }).compileComponents();
    spyOnProperty(window, 'localStorage', 'get').and.returnValue(
      localStorageMock
    );
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
