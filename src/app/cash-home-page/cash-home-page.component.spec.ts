import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashHomePageComponent } from './cash-home-page.component';

describe('CashHomePageComponent', () => {
  let component: CashHomePageComponent;
  let fixture: ComponentFixture<CashHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
