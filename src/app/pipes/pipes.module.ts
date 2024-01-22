import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialNumberFormatPipe } from './financial-number-format/financial-number-format.pipe';
import { InvalidInputPipe } from './invalid-input.pipe';

@NgModule({
  declarations: [
    FinancialNumberFormatPipe,
    InvalidInputPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinancialNumberFormatPipe,
    InvalidInputPipe
  ]
})
export class PipesModule { }
