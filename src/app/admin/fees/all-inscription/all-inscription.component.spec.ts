import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInscriptionComponent } from './all-inscription.component';

describe('AllInscriptionComponent', () => {
  let component: AllInscriptionComponent;
  let fixture: ComponentFixture<AllInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
