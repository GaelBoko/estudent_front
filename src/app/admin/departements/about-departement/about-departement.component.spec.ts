import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutDepartementComponent } from './about-departement.component';

describe('AboutDepartementComponent', () => {
  let component: AboutDepartementComponent;
  let fixture: ComponentFixture<AboutDepartementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
