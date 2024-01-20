import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-financial-number-input',
  templateUrl: './financial-number-input.component.html',
  styleUrls: ['./financial-number-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberInputComponent {
  public financialNumber = new FormControl<string>('');

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  public navigateTo(): void {
    this._router.navigate(['../output'], { queryParams: { value: this.financialNumber.value }, relativeTo: this._activatedRoute });
  }
}
