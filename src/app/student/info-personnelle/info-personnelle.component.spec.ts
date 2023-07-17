import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonnelleComponent } from './info-personnelle.component';

describe('InfoPersonnelleComponent', () => {
  let component: InfoPersonnelleComponent;
  let fixture: ComponentFixture<InfoPersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonnelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
