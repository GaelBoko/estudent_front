import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormationDetailsComponent } from './e-formation-details.component';

describe('EFormationDetailsComponent', () => {
  let component: EFormationDetailsComponent;
  let fixture: ComponentFixture<EFormationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFormationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFormationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
