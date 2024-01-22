import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialNumberInputComponent } from './financial-number-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FinancialNumberUtilitiesModule } from '../financial-number-utilities/financial-number-utilities.module';

describe('FinancialNumberInputComponent', () => {
  let component: FinancialNumberInputComponent;
  let fixture: ComponentFixture<FinancialNumberInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNumberInputComponent],
      imports: [RouterTestingModule, FinancialNumberUtilitiesModule]
    });
    fixture = TestBed.createComponent(FinancialNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
