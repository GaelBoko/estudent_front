import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECursusComponent } from './e-cursus.component';

describe('ECursusComponent', () => {
  let component: ECursusComponent;
  let fixture: ComponentFixture<ECursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECursusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
