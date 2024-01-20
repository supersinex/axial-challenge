import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNumberOutputComponent } from './financial-number-output.component';

describe('FinancialNumberOutputComponent', () => {
  let component: FinancialNumberOutputComponent;
  let fixture: ComponentFixture<FinancialNumberOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNumberOutputComponent]
    });
    fixture = TestBed.createComponent(FinancialNumberOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
