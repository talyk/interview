import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { isError: boolean } | null {
    const regex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    );
    if ((control && control.value) || control.value) {
        if (!regex.test(control.value)) {
            return {
                isError: true,
            };
        }
    }
    return null;
}
