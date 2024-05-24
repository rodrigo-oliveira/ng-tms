
import { FormControl } from '@angular/forms';
import { nameValidator } from './name.validator';

describe('nameValidator', () => {
  it('should call nameValidator (valid)', () => {
    expect(nameValidator(new FormControl('Claudio da Silva'))).toEqual(null);
  });

  it('should call nameValidator with numbers (invalid)', () => {
    expect(nameValidator(new FormControl('Claudio123'))).toEqual({invalidName: true});
  });

  it('should call nameValidator with whitespace (invalid)', () => {
    expect(nameValidator(new FormControl('Claudio da Silva '))).toEqual({invalidName: true});
  });
});
