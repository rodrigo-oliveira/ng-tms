import { AbstractControl, ValidationErrors } from '@angular/forms';

function isValidName(value: string):boolean {
  return new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]+(\\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)+$').test(value);
}

export function nameValidator(control: AbstractControl): ValidationErrors | null  {
  const isValid = isValidName(control.value);

  return !isValid ? {invalidName: true} : null;
}
