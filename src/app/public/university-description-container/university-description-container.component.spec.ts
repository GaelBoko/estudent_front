import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDescriptionContainerComponent } from './university-description-container.component';

describe('UniversityDescriptionContainerComponent', () => {
  let component: UniversityDescriptionContainerComponent;
  let fixture: ComponentFixture<UniversityDescriptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDescriptionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityDescriptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
