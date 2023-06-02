import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllMatieresComponent } from './all-matieres.component';

describe('AllMatieresComponent', () => {
  let component: AllMatieresComponent;
  let fixture: ComponentFixture<AllMatieresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMatieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
