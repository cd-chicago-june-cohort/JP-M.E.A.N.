import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBikeComponent } from './edit-bike.component';

describe('EditBikeComponent', () => {
  let component: EditBikeComponent;
  let fixture: ComponentFixture<EditBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
