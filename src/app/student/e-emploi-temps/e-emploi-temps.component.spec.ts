import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEmploiTempsComponent } from './e-emploi-temps.component';

describe('EEmploiTempsComponent', () => {
  let component: EEmploiTempsComponent;
  let fixture: ComponentFixture<EEmploiTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEmploiTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEmploiTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
