import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypebourseComponent } from './add-typebourse.component';

describe('AddTypebourseComponent', () => {
  let component: AddTypebourseComponent;
  let fixture: ComponentFixture<AddTypebourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypebourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypebourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
