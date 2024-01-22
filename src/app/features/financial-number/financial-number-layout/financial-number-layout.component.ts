import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-financial-number-layout',
  templateUrl: './financial-number-layout.component.html',
  styleUrls: ['./financial-number-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialNumberLayoutComponent {
  // Subscribe to the router events in order to always have the currently active child accessible via the snapshot.
  public childRouteName$ = this._router.events
    .pipe(
      map(() => this._activatedRoute.snapshot.firstChild?.data['routeName'])
    );

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) { }
}
