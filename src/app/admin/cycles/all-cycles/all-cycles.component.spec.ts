import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllCyclesComponent } from './all-cycles.component';

describe('AllCyclesComponent', () => {
  let component: AllCyclesComponent;
  let fixture: ComponentFixture<AllCyclesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
