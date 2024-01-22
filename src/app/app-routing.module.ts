import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from './features/financial-number/financial-number-routing.module';

const routes: Routes = [
  {
    path: '',
    /*
      For this simple app, we have no other views to consider, but in the event that more would be added, this can easily be swapped with a new component,
      such as a dashboard or landing page.
    */
    redirectTo: ROUTE_PATHS.financialNumber,
    pathMatch: 'full'
  },
  {
    path: ROUTE_PATHS.financialNumber,
    /*
      Lazy load the module for the Financial Number conversion. In a real app, features or modules that won't be used anywhere other than their
      designated place should be lazily loaded for optimization.
    */
    loadChildren: () => import('./features/financial-number/financial-number.module').then(m => m.FinancialNumberModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
