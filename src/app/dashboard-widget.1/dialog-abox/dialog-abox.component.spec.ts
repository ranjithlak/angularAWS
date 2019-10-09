import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAboxComponent } from './dialog-abox.component';

describe('DialogAboxComponent', () => {
  let component: DialogAboxComponent;
  let fixture: ComponentFixture<DialogAboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
