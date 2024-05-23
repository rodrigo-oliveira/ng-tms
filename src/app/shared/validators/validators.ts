import { AbstractControl, ValidationErrors } from "@angular/forms";
import { cpfCnpjValidator } from "./cpf-cnpj.validator";
import { nameValidator } from "./name.validator";

export class TmsValidators {
    static fullName(control: AbstractControl): ValidationErrors | null {
        return nameValidator(control);
    }

    static cpfCnpj(control: AbstractControl): ValidationErrors | null {
        return cpfCnpjValidator(control);
    }
}