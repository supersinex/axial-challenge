import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class FinancialNumberUtilitiesService {
  constructor() { }

  public parseFinancialNumber(input: string): [number, string] {
    const [numericInput, suffix] = [
      input?.slice(0, -1),
      input?.slice(-1).toLowerCase(),
    ];

    // Regex pattern for numbers, including decimals and negatives
    const numericPattern = /^-?\d*\.?\d+$/;

    let numericValue: number = NaN;

    if (numericPattern.test(numericInput)) {
      numericValue = parseFloat(numericInput);
    }

    return [numericValue, suffix];
  }

  public getFinancialNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const [numericValue, suffix] = this.parseFinancialNumber(control.value);

      const suffixPattern = /^[A-Za-z]$/;

      // If invalid, return a reactive forms error property, named 'financialNumber'
      return numericValue && suffixPattern.test(suffix) ? null : { financialNumber: true };
    };
  }
}
