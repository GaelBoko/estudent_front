import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementAttendanceComponent } from './departement-attendance.component';

describe('DepartementAttendanceComponent', () => {
  let component: DepartementAttendanceComponent;
  let fixture: ComponentFixture<DepartementAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
