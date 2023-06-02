import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypebourseComponent } from './all-typebourse.component';

describe('AllTypebourseComponent', () => {
  let component: AllTypebourseComponent;
  let fixture: ComponentFixture<AllTypebourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTypebourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTypebourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
