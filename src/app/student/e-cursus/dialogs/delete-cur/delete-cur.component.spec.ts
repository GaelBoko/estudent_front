import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCurComponent } from './delete-cur.component';

describe('DeleteCurComponent', () => {
  let component: DeleteCurComponent;
  let fixture: ComponentFixture<DeleteCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
