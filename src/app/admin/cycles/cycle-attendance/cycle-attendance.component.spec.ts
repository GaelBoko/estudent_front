import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleAttendanceComponent } from './cycle-attendance.component';

describe('CycleAttendanceComponent', () => {
  let component: CycleAttendanceComponent;
  let fixture: ComponentFixture<CycleAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
