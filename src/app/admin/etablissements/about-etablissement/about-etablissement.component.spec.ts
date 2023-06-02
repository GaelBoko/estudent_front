import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutEtablissementComponent } from './about-etablissement.component';

describe('AboutEtablissementComponent', () => {
  let component: AboutEtablissementComponent;
  let fixture: ComponentFixture<AboutEtablissementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
