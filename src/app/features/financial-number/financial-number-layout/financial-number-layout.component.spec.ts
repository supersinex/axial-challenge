import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNumberLayoutComponent } from './financial-number-layout.component';

describe('FinancialNumberLayoutComponent', () => {
  let component: FinancialNumberLayoutComponent;
  let fixture: ComponentFixture<FinancialNumberLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNumberLayoutComponent]
    });
    fixture = TestBed.createComponent(FinancialNumberLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
