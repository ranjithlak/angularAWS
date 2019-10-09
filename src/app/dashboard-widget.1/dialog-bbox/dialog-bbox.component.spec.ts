import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBboxComponent } from './dialog-bbox.component';

describe('DialogBboxComponent', () => {
  let component: DialogBboxComponent;
  let fixture: ComponentFixture<DialogBboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
