import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOffreFormationItemComponent } from './e-offre-formation-item.component';

describe('EOffreFormationItemComponent', () => {
  let component: EOffreFormationItemComponent;
  let fixture: ComponentFixture<EOffreFormationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOffreFormationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EOffreFormationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
