import { TestBed } from '@angular/core/testing';
import { FinancialNumberFormatPipe } from './financial-number-format.pipe';
import { FinancialNumberUtilitiesService } from '../financial-number-utilities.service';

describe('FinancialNumberFormatPipe', () => {
  let pipe: FinancialNumberFormatPipe;
  let service: FinancialNumberUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialNumberUtilitiesService]
    });
    service = TestBed.inject(FinancialNumberUtilitiesService);
    pipe = new FinancialNumberFormatPipe(service);
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Negative Tests', () => {
    it('should return null when input is undefined', () => {
      // Tests will follow the traditional Arrange, Act, Assert pattern

      // Arrange
      const input: unknown = undefined;

      // Act
      const result = pipe.transform(input as string);

      // Assert
      expect(result).toBeNull();
    });

    it('should return null when input is null', () => {
      const input: unknown = null;
      const result = pipe.transform(input as string);
      expect(result).toBeNull();
    });

    it('should return null when input is an empty string', () => {
      const input = '';
      const result = pipe.transform(input);
      expect(result).toBeNull();
    });

    it('should return null when input is 1 character in length', () => {
      const input = '1';
      const result = pipe.transform(input);
      expect(result).toBeNull();
    });

    it('should return null when "numericValue" is not a number', () => {
      const input = 'test250k';
      const result = pipe.transform(input);
      expect(result).toBeNull();
    });

    it('should return null when no matching multiplier value is found', () => {
      const input = '500p';
      const result = pipe.transform(input);
      expect(result).toBeNull();
    });
  });

  describe('Positive Tests', () => {
    it('should return the product when a numeric value exists and a valid muliplier is found', () => {
      const input = '500k';
      const result = pipe.transform(input);
      expect(result).toEqual(500000);
    });

    it('should return the product when a numeric value exists as a negative number and a valid muliplier is found', () => {
      const input = '-20m';
      const result = pipe.transform(input);
      expect(result).toEqual(-20000000);
    });

    it('should return the product when a numeric value exists as a decimal and a valid muliplier is found', () => {
      const input = '.5b';
      const result = pipe.transform(input);
      expect(result).toEqual(500000000);
    });
  })

})
