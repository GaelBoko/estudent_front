import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCptComponent } from './delete-cpt.component';

describe('DeleteComponent', () => {
  let component: DeleteCptComponent;
  let fixture: ComponentFixture<DeleteCptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
