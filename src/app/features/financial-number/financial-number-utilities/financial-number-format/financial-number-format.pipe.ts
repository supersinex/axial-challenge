import { Pipe, PipeTransform } from '@angular/core';
import { FinancialNumberUtilitiesService } from '../financial-number-utilities.service';

const multiplierMap: { [key: string]: number } = {
  k: 1e3,
  m: 1e6,
  b: 1e9,
  // could easily add trillion here as well, etc.
};

@Pipe({
  name: 'financialNumberFormat'
})
export class FinancialNumberFormatPipe implements PipeTransform {

  constructor(
    private readonly _financialNumberUtilitiesService: FinancialNumberUtilitiesService
  ) {}

  transform(rawValue: string, ...args: unknown[]): number | null {
    if (!rawValue || rawValue.length <= 1) {
      return null;
    }

    const trimmedValue = rawValue.trim();

    const [numericValue, suffix] = this._financialNumberUtilitiesService.parseFinancialNumber(trimmedValue);
    const multiplier = multiplierMap[suffix];

    /*
      I debated whether or not to handle the case where a regular number is entered, with no multiplier.
      In the end, I decided to stick to the requirements strictly. In a real world scenario, I would ask about
      this use case and others with the team and see if further requirements needed to be surfaced.
    */
    if (!numericValue || !multiplier) {
      return null;
    }

    return numericValue * multiplier
  }

}