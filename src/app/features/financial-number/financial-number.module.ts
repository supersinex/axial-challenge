import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialNumberRoutingModule } from './financial-number-routing.module';
import { FinancialNumberLayoutComponent } from './financial-number-layout/financial-number-layout.component';
import { FinancialNumberInputComponent } from './financial-number-input/financial-number-input.component';
import { FinancialNumberOutputComponent } from './financial-number-output/financial-number-output.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FinancialNumberUtilitiesModule } from './financial-number-utilities/financial-number-utilities.module';


@NgModule({
  declarations: [
    FinancialNumberLayoutComponent,
    FinancialNumberInputComponent,
    FinancialNumberOutputComponent
  ],
  imports: [
    CommonModule,
    FinancialNumberRoutingModule,
    ReactiveFormsModule,
    PipesModule,
    FinancialNumberUtilitiesModule
  ]
})
export class FinancialNumberModule { }
