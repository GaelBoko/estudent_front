import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAttendanceComponent } from './department-attendance.component';

describe('DepartmentAttendanceComponent', () => {
  let component: DepartmentAttendanceComponent;
  let fixture: ComponentFixture<DepartmentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
