import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDevoirItemComponent } from './e-devoir-item.component';

describe('EDevoirItemComponent', () => {
  let component: EDevoirItemComponent;
  let fixture: ComponentFixture<EDevoirItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDevoirItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDevoirItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
