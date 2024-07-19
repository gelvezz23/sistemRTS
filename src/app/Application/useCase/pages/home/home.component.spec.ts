import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '.';
import { localStorageMock } from '../../utils/mocks/localStorageMock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();
    spyOnProperty(window, 'localStorage', 'get').and.returnValue(
      localStorageMock
    );
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
