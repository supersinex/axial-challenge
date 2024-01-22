import { parseFinancialNumber } from './parse-financial-number';

describe('parseFinancialNumber', () => {
    describe('Negative Tests', () => {
        it('should return NaN and an empty string when an empty string is provided as input', () => {
            const input = '';
            const [numericValue, suffix] = parseFinancialNumber(input);
            expect(numericValue).toBeNaN();
            expect(suffix).toBeFalsy();
        });

        it('should return NaN and an empty string when undefined is provided as input', () => {
            const input: unknown = undefined;
            const [numericValue, suffix] = parseFinancialNumber(input as string);
            expect(numericValue).toBeNaN();
            expect(suffix).toBeFalsy();
        });

        it('should return NaN and an empty string when null is provided as input', () => {
            const input: unknown = null;
            const [numericValue, suffix] = parseFinancialNumber(input as string);
            expect(numericValue).toBeNaN();
            expect(suffix).toBeFalsy();
        });

        it('should return the parsed values when a valid input is provided', () => {
            const input = '250k';
            const [numericValue, suffix] = parseFinancialNumber(input);
            expect(numericValue).toBeTruthy();
            expect(numericValue).toEqual(250);
            expect(suffix).toBeTruthy();
            expect(suffix).toEqual('k');
        });

        it('should return NaN for the numeric value when an number cannot be parsed despite a valid suffix', () => {
            const input = 'testing500m';
            const [numericValue, suffix] = parseFinancialNumber(input);
            expect(numericValue).toBeFalsy();
            expect(numericValue).toBeNaN();
            expect(suffix).toBeTruthy();
            expect(suffix).toEqual('m');
        });
    });

})
