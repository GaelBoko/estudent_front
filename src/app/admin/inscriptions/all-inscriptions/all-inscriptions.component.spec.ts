import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllInscriptionsComponent } from './all-inscriptions.component';

describe('AllInscriptionsComponent', () => {
  let component: AllInscriptionsComponent;
  let fixture: ComponentFixture<AllInscriptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
