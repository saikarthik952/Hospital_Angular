import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagHomeComponent } from './diag-home.component';

describe('DiagHomeComponent', () => {
  let component: DiagHomeComponent;
  let fixture: ComponentFixture<DiagHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
