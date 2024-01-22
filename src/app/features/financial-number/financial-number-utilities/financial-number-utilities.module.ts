import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialNumberUtilitiesService } from './financial-number-utilities.service';
import { FinancialNumberFormatPipe } from './financial-number-format/financial-number-format.pipe';

@NgModule({
  declarations: [
    FinancialNumberFormatPipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    FinancialNumberUtilitiesService
  ],
  exports: [
    FinancialNumberFormatPipe
  ]
})
export class FinancialNumberUtilitiesModule { }
