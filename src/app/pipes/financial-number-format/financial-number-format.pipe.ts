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

  transform(value: string, ...args: unknown[]): number | null {
    if (value === undefined) {
      return null;
    }

    const trimmedValue = value.trim();
    const [numericValue, suffix] = [
      parseFloat(trimmedValue.slice(0, -1)),
      trimmedValue.slice(-1).toLowerCase(),
    ];
    const multiplier = multiplierMap[suffix];

    if (!numericValue) {
      return parseFloat(trimmedValue);
    }

    if (multiplier) {
      return (numericValue * multiplier);
    } else {
      return numericValue;
    }
  }

}