import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ROUTE_PATHS } from '../financial-number-routing.module';

@Component({
  selector: 'app-financial-number-output',
  templateUrl: './financial-number-output.component.html',
  styleUrls: ['./financial-number-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberOutputComponent {
  // Subscribe to an Observable of the queryParams and select the param 'value' if it exists
  public output$ = this._activatedRoute.queryParams.pipe(map(params => params['value'] as string));
  
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  public onReturn(): void {
    this._router.navigate([`../${ROUTE_PATHS.input}`], { relativeTo: this._activatedRoute })
  }
}
