import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoordonneesComponent } from './e-coordonnees.component';

describe('ECoordonneesComponent', () => {
  let component: ECoordonneesComponent;
  let fixture: ComponentFixture<ECoordonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECoordonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECoordonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
