import { FinancialNumberFormatPipe } from './financial-number-format.pipe';

describe('FinancialNumberFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new FinancialNumberFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
