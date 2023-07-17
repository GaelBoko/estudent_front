import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFistmenuComponent } from './nav-fistmenu.component';

describe('NavFistmenuComponent', () => {
  let component: NavFistmenuComponent;
  let fixture: ComponentFixture<NavFistmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFistmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFistmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
