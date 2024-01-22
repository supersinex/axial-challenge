import { Pipe, PipeTransform } from '@angular/core';

const multiplierMap: { [key: string]: number } = {
  k: 1e3,
  m: 1e6,
  b: 1e9,
};

@Pipe({
  name: 'financialNumberFormat'
})
export class FinancialNumberFormatPipe implements PipeTransform {

  transform(rawValue: string, ...args: unknown[]): number | null {
    if (!rawValue || rawValue.length <= 1) {
      return null;
    }

    const trimmedValue = rawValue.trim();

    const [numericValue, suffix] = [
      parseFloat(trimmedValue.slice(0, -1)),
      trimmedValue.slice(-1).toLowerCase(),
    ];
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