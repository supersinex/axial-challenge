import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialNumberFormatPipe } from './financial-number-format/financial-number-format.pipe';

@NgModule({
  declarations: [
    FinancialNumberFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinancialNumberFormatPipe
  ]
})
export class PipesModule { }
