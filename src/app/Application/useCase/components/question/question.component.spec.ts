import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;

    // Define el valor inicial de quest antes de fixture.detectChanges()
    component.quest = { id: 18 };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for viewimage when quest id is 18', () => {
    component.quest = { id: 18 };
    expect(component.viewimage()).toBe(true);
  });

  it('should return false for viewimage when quest id is not in the list', () => {
    component.quest = { id: 1 };
    expect(component.viewimage()).toBe(false);
  });

  // Agrega más pruebas según sea necesario
});
