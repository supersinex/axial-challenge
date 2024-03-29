import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialNumberUtilitiesService } from '../financial-number-utilities/financial-number-utilities.service';
import { ROUTE_PATHS } from '../financial-number-routing.module';

@Component({
  selector: 'app-financial-number-input',
  templateUrl: './financial-number-input.component.html',
  styleUrls: ['./financial-number-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberInputComponent {
  public financialNumber = new FormControl<string>('', [Validators.required, this._financialNumberUtilitiesService.getFinancialNumberValidator()]);

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _financialNumberUtilitiesService: FinancialNumberUtilitiesService
  ) { }

  public handleSubmit(e: SubmitEvent): void {
    /*
     Submitting via the enter key will reload the page if an error occurs, but for this app, I felt it would be a better UX to
     handle the errors without a reload, and display them back to the user.
    */
    e.preventDefault();
    this.processInput();
  }

  public processInput(): void {
    if (this.financialNumber.valid) {
      this._router.navigate([`../${ROUTE_PATHS.output}`], { queryParams: { value: this.financialNumber.value }, relativeTo: this._activatedRoute });
    } else {
      this.financialNumber.markAsTouched();
    }
  }

  public clearInput(): void {
    this.financialNumber.reset();
  }
}
