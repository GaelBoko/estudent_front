import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFistnewsComponent } from './nav-fistnews.component';

describe('NavFistnewsComponent', () => {
  let component: NavFistnewsComponent;
  let fixture: ComponentFixture<NavFistnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFistnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFistnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
