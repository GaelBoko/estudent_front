import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDevoirsComponent } from './e-devoirs.component';

describe('EDevoirsComponent', () => {
  let component: EDevoirsComponent;
  let fixture: ComponentFixture<EDevoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDevoirsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDevoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
