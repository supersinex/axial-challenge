import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialNumberOutputComponent } from './financial-number-output.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from '../../../pipes/pipes.module';

describe('FinancialNumberOutputComponent', () => {
  let component: FinancialNumberOutputComponent;
  let fixture: ComponentFixture<FinancialNumberOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNumberOutputComponent],
      imports: [RouterTestingModule, PipesModule]
    });
    fixture = TestBed.createComponent(FinancialNumberOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
