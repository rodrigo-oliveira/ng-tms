import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

const cpfLength = 11;
const cnpjLength = 14;

function buildDigit(arr: number[]): number {

    const isCpf = arr.length < cpfLength;
    const digit = arr
            .map((val, idx) => val * ((!isCpf ? idx % 8 : idx) + 2))
            .reduce((total, current) => total + current) % cpfLength;

    if (digit < 2 && isCpf) {
        return 0;
    }

    return cpfLength - digit;
}

function validateCpfCnpj(c: AbstractControl): ValidationErrors | null {

    const cpfCnpj = c.value.replace(/\D/g, '');

    if ([cpfLength, cnpjLength].indexOf(cpfCnpj.length) < 0) {
        return { length: true };
    }

    if (/^([0-9])\1*$/.test(cpfCnpj)) {
        return { equalDigits: true };
    }

    const cpfCnpjArr: number[] = cpfCnpj.split('').reverse().slice(2);

    cpfCnpjArr.unshift(buildDigit(cpfCnpjArr));
    cpfCnpjArr.unshift(buildDigit(cpfCnpjArr));

    if (cpfCnpj !== cpfCnpjArr.reverse().join('')) {
        return { digit: true };
    }

    return null;
}

function validate(c: AbstractControl): ValidationErrors | null {
    return validateCpfCnpj(c);
}

export function cpfCnpjValidator(control: AbstractControl): ValidationErrors | null  {
    return validate(control);
}