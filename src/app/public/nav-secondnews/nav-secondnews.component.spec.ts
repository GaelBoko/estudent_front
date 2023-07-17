import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecondnewsComponent } from './nav-secondnews.component';

describe('NavSecondnewsComponent', () => {
  let component: NavSecondnewsComponent;
  let fixture: ComponentFixture<NavSecondnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSecondnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSecondnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
