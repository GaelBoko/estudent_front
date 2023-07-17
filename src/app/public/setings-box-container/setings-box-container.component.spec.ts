import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingsBoxContainerComponent } from './setings-box-container.component';

describe('SetingsBoxContainerComponent', () => {
  let component: SetingsBoxContainerComponent;
  let fixture: ComponentFixture<SetingsBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetingsBoxContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetingsBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
