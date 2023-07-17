import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBlockContenairComponent } from './video-block-contenair.component';

describe('VideoBlockContenairComponent', () => {
  let component: VideoBlockContenairComponent;
  let fixture: ComponentFixture<VideoBlockContenairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBlockContenairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBlockContenairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
