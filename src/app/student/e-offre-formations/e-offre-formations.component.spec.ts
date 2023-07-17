import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOffreFormationsComponent } from './e-offre-formations.component';

describe('EOffreFormationsComponent', () => {
  let component: EOffreFormationsComponent;
  let fixture: ComponentFixture<EOffreFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOffreFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EOffreFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
