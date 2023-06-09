import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddUniversityComponent } from './add-university.component';

describe('AddUniversityComponent', () => {
  let component: AddUniversityComponent;
  let fixture: ComponentFixture<AddUniversityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
