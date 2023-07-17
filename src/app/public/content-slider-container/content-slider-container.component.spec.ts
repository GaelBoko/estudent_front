import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderContainerComponent } from './content-slider-container.component';

describe('ContentSliderContainerComponent', () => {
  let component: ContentSliderContainerComponent;
  let fixture: ComponentFixture<ContentSliderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSliderContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSliderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
