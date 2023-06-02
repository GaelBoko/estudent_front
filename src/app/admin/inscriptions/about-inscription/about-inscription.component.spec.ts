import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutInscriptionComponent } from './about-inscription.component';

describe('AboutInscriptionComponent', () => {
  let component: AboutInscriptionComponent;
  let fixture: ComponentFixture<AboutInscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
