import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllUniversitiesComponent } from './all-universities.component';

describe('AllUniversitiesComponent', () => {
  let component: AllUniversitiesComponent;
  let fixture: ComponentFixture<AllUniversitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
