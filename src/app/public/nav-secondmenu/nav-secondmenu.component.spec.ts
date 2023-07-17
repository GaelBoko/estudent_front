import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecondmenuComponent } from './nav-secondmenu.component';

describe('NavSecondmenuComponent', () => {
  let component: NavSecondmenuComponent;
  let fixture: ComponentFixture<NavSecondmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSecondmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSecondmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
