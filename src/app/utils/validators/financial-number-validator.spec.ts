import { FormControl } from '@angular/forms';
import { financialNumberValidator } from './financial-number-validator';

describe('financialNumberValidator', () => {
    describe('Negative Tests', () => {
        it('should return the error property when financial number is not a valid number', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('testing123k');
            const result = validator(input);
            expect(result).toHaveProperty('financialNumber');
        });

        it('should return the error property when suffix is not a letter', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('250');
            const result = validator(input);
            expect(result).toHaveProperty('financialNumber');
        });
    });

    describe('Positive Tests', () => {
        it('should return null when the numerical value and suffix are valid inputs', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('250k');
            const result = validator(input);
            expect(result).toBeNull();
        });

        it('should return null when a negative numerical value and suffix are valid inputs', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('-5b');
            const result = validator(input);
            expect(result).toBeNull();
        });

        it('should return null when a decimal numerical value and suffix are valid inputs', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('2.5m');
            const result = validator(input);
            expect(result).toBeNull();
        });

        it('should return null when a numerical value and capitalized suffix are valid inputs', () => {
            const validator = financialNumberValidator();
            const input = new FormControl<string>('.5B');
            const result = validator(input);
            expect(result).toBeNull();
        });
    });

})
