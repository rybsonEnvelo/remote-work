import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOffComponent } from './modal-off.component';

describe('ModalOffComponent', () => {
  let component: ModalOffComponent;
  let fixture: ComponentFixture<ModalOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
