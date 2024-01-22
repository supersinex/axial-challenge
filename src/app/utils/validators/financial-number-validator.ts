import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { parseFinancialNumber } from "../functions/parse-financial-number";

export function financialNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const [numericValue, suffix] = parseFinancialNumber(control.value);

        const suffixPattern = /^[A-Za-z]$/;

        // If invalid, return a reactive forms error property, named 'financialNumber'
        return numericValue && suffixPattern.test(suffix) ? null : { financialNumber: true };
    };
}