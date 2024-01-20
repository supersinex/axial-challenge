import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-financial-number-output',
  templateUrl: './financial-number-output.component.html',
  styleUrls: ['./financial-number-output.component.css']
})
export class FinancialNumberOutputComponent implements OnInit {
  public output: string = '';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {}

  public ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(take(1), map(params => params['value'] as string))
    .subscribe((value) => {
      this.output = value;
    });
  }

  public navigateTo(): void {
    this._router.navigate(['../input'], { relativeTo: this._activatedRoute })
  }
}
