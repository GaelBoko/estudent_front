import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditUniversityComponent } from './edit-university.component';

describe('EditUniversityComponent', () => {
  let component: EditUniversityComponent;
  let fixture: ComponentFixture<EditUniversityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
