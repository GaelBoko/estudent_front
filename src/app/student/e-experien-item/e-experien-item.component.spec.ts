import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EExperienItemComponent } from './e-experien-item.component';

describe('EExperienItemComponent', () => {
  let component: EExperienItemComponent;
  let fixture: ComponentFixture<EExperienItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EExperienItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EExperienItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
