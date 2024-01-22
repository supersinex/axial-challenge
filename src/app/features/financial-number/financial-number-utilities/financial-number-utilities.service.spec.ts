import { TestBed } from '@angular/core/testing';

import { FinancialNumberUtilitiesService } from './financial-number-utilities.service';
import { FormControl } from '@angular/forms';

describe('FinancialNumberUtilitiesService', () => {
  let service: FinancialNumberUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialNumberUtilitiesService]
    });
    service = TestBed.inject(FinancialNumberUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFinancialNumberValidator', () => {
    describe('Negative Tests', () => {
      it('should return the error property when financial number is not a valid number', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('testing123k');
        const result = validator(input);
        expect(result).toHaveProperty('financialNumber');
      });

      it('should return the error property when suffix is not a letter', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('250');
        const result = validator(input);
        expect(result).toHaveProperty('financialNumber');
      });
    });

    describe('Positive Tests', () => {
      it('should return null when the numerical value and suffix are valid inputs', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('250k');
        const result = validator(input);
        expect(result).toBeNull();
      });

      it('should return null when a negative numerical value and suffix are valid inputs', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('-5b');
        const result = validator(input);
        expect(result).toBeNull();
      });

      it('should return null when a decimal numerical value and suffix are valid inputs', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('2.5m');
        const result = validator(input);
        expect(result).toBeNull();
      });

      it('should return null when a numerical value and capitalized suffix are valid inputs', () => {
        const validator = service.getFinancialNumberValidator();
        const input = new FormControl<string>('.5B');
        const result = validator(input);
        expect(result).toBeNull();
      });
    });

  });

  describe('parseFinancialNumber', () => {
    it('should return NaN and an empty string when an empty string is provided as input', () => {
      const input = '';
      const [numericValue, suffix] = service.parseFinancialNumber(input);
      expect(numericValue).toBeNaN();
      expect(suffix).toBeFalsy();
    });

    it('should return NaN and an empty string when undefined is provided as input', () => {
      const input: unknown = undefined;
      const [numericValue, suffix] = service.parseFinancialNumber(input as string);
      expect(numericValue).toBeNaN();
      expect(suffix).toBeFalsy();
    });

    it('should return NaN and an empty string when null is provided as input', () => {
      const input: unknown = null;
      const [numericValue, suffix] = service.parseFinancialNumber(input as string);
      expect(numericValue).toBeNaN();
      expect(suffix).toBeFalsy();
    });

    it('should return the parsed values when a valid input is provided', () => {
      const input = '250k';
      const [numericValue, suffix] = service.parseFinancialNumber(input);
      expect(numericValue).toBeTruthy();
      expect(numericValue).toEqual(250);
      expect(suffix).toBeTruthy();
      expect(suffix).toEqual('k');
    });

    it('should return NaN for the numeric value when an number cannot be parsed despite a valid suffix', () => {
      const input = 'testing500m';
      const [numericValue, suffix] = service.parseFinancialNumber(input);
      expect(numericValue).toBeFalsy();
      expect(numericValue).toBeNaN();
      expect(suffix).toBeTruthy();
      expect(suffix).toEqual('m');
    });

    it('should return the numeric value when excess characters exist between the numeric values and the suffix', () => {
      const input = '500mmmm';
      const [numericValue, suffix] = service.parseFinancialNumber(input);
      expect(numericValue).toBeFalsy();
      expect(numericValue).toBeNaN();
      expect(suffix).toBeTruthy();
      expect(suffix).toEqual('m');
    });
  });
});
