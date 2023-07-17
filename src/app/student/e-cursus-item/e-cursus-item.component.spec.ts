import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECursusItemComponent } from './e-cursus-item.component';

describe('ECursusItemComponent', () => {
  let component: ECursusItemComponent;
  let fixture: ComponentFixture<ECursusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECursusItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECursusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
