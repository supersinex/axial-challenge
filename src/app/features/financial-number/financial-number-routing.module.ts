import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialNumberLayoutComponent } from './financial-number-layout/financial-number-layout.component';
import { FinancialNumberInputComponent } from './financial-number-input/financial-number-input.component';
import { FinancialNumberOutputComponent } from './financial-number-output/financial-number-output.component';

/*
  Constants aren't strictly speaking necessary, especially when many routes exist, but it's a good practice
  when needing to use the route in more than one place, to save time for refactoring and ensuring name consistency,
  such as when establishing the route name and redirecting to that same route name from another route.
*/
export const FINANCIAL_NUMBER_ROUTE = 'financial-number';
const INPUT_ROUTE = 'input';
const OUTPUT_ROUTE = 'output';

const routes: Routes = [
  {
    path: '',
    component: FinancialNumberLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: INPUT_ROUTE,
        pathMatch: 'full'
      },
      {
        path: INPUT_ROUTE,
        component: FinancialNumberInputComponent,
        data: { routeName: 'Input' }
      },
      {
        path: OUTPUT_ROUTE,
        component: FinancialNumberOutputComponent,
        data: { routeName: 'Output' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialNumberRoutingModule { }
