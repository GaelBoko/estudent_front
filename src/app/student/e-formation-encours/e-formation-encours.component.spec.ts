import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormationEncoursComponent } from './e-formation-encours.component';

describe('EFormationEncoursComponent', () => {
  let component: EFormationEncoursComponent;
  let fixture: ComponentFixture<EFormationEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFormationEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFormationEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
