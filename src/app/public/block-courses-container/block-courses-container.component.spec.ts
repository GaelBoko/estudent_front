import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCoursesContainerComponent } from './block-courses-container.component';

describe('BlockCoursesContainerComponent', () => {
  let component: BlockCoursesContainerComponent;
  let fixture: ComponentFixture<BlockCoursesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCoursesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockCoursesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
