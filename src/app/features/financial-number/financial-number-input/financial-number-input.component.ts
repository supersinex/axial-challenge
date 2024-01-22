import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { financialNumberValidator } from '../../../utils/validators/financial-number-validator';

@Component({
  selector: 'app-financial-number-input',
  templateUrl: './financial-number-input.component.html',
  styleUrls: ['./financial-number-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberInputComponent {
  public financialNumber = new FormControl<string>('', [Validators.required, financialNumberValidator()]);
  public errors$ = new Subject();

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  public handleSubmit(): void {
    if (this.financialNumber.valid) {
      this._router.navigate(['../output'], { queryParams: { value: this.financialNumber.value }, relativeTo: this._activatedRoute });
    } else {

    }
  }
}
