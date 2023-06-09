import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutDepartmentComponent } from './about-department.component';

describe('AboutDepartmentComponent', () => {
  let component: AboutDepartmentComponent;
  let fixture: ComponentFixture<AboutDepartmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
