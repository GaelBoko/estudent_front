import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EExperien2ItemComponent } from './e-experien2-item.component';

describe('EExperien2ItemComponent', () => {
  let component: EExperien2ItemComponent;
  let fixture: ComponentFixture<EExperien2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EExperien2ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EExperien2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
