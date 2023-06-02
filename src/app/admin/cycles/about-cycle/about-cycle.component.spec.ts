import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCycleComponent } from './about-cycle.component';

describe('AboutCycleComponent', () => {
  let component: AboutCycleComponent;
  let fixture: ComponentFixture<AboutCycleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
