import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutMatiereComponent } from './about-matiere.component';

describe('AboutMatiereComponent', () => {
  let component: AboutMatiereComponent;
  let fixture: ComponentFixture<AboutMatiereComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
