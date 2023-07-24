import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsPickCardComponent } from './editors-pick-card.component';

describe('EditorsPickCardComponent', () => {
  let component: EditorsPickCardComponent;
  let fixture: ComponentFixture<EditorsPickCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorsPickCardComponent]
    });
    fixture = TestBed.createComponent(EditorsPickCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
