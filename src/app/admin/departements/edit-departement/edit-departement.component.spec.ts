import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditDepartementComponent } from './edit-departement.component';

describe('EditDepartementComponent', () => {
  let component: EditDepartementComponent;
  let fixture: ComponentFixture<EditDepartementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
