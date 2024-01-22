import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-financial-number-output',
  templateUrl: './financial-number-output.component.html',
  styleUrls: ['./financial-number-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberOutputComponent {
  public output$ = this._activatedRoute.queryParams.pipe(map(params => params['value'] as string));
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  public navigateTo(): void {
    this._router.navigate(['../input'], { relativeTo: this._activatedRoute })
  }
}
