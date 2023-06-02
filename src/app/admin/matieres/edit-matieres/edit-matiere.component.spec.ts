import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMatiereComponent } from './edit-matiere.component';

describe('EditMatiereComponent', () => {
  let component: EditMatiereComponent;
  let fixture: ComponentFixture<EditMatiereComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
