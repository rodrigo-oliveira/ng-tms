
import { FormControl } from '@angular/forms';
import { cpfCnpjValidator } from './cpf-cnpj.validator';

describe('cpfCnpjValidator', () => {
  it('should call cpfCnpjValidator (valid)', () => {
    expect(cpfCnpjValidator(new FormControl('123.456.789-09'))).toEqual(null);
  });

  it('should call cpfCnpjValidator with equal digits (invalid)', () => {
    expect(cpfCnpjValidator(new FormControl('111.111.111-11'))).toEqual({equalDigits: true});
  });

  it('should call cpfCnpjValidator with invalid length (invalid)', () => {
    expect(cpfCnpjValidator(new FormControl('111.111.11'))).toEqual({length: true});
  });

  it('should call cpfCnpjValidator with invalid check digit (invalid)', () => {
    expect(cpfCnpjValidator(new FormControl('123.456.789-00'))).toEqual({digit: true});
  });
});
