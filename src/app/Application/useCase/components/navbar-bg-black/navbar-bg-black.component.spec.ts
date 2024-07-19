import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBgBlackComponent } from './navbar-bg-black.component';

describe('NavbarBgBlackComponent', () => {
  let component: NavbarBgBlackComponent;
  let fixture: ComponentFixture<NavbarBgBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBgBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBgBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
