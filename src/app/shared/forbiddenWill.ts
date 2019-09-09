import { AbstractControl } from '@angular/forms';
export function forbiddenWill(control: AbstractControl) {
  if (control.value) {
    const str = control.value as string;
    if (str.indexOf('Will') >= 0) {
      return { forbiddenWill: true };
    }
  }
  return null;
}
