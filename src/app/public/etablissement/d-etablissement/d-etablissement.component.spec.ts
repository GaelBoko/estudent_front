import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEtablissementComponent } from './d-etablissement.component';

describe('DEtablissementComponent', () => {
  let component: DEtablissementComponent;
  let fixture: ComponentFixture<DEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
