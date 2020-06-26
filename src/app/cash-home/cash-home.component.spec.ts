import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashHomeComponent } from './cash-home.component';

describe('CashHomeComponent', () => {
  let component: CashHomeComponent;
  let fixture: ComponentFixture<CashHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
