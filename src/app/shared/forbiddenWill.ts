import { AbstractControl } from '@angular/forms';
export function forbiddenTerm(term: string) {
  return (control: AbstractControl) => {
    if (control.value) {
      const str = control.value as string;
      if (str.indexOf(term) >= 0) {
        return { forbiddenWill: true };
      }
    }
    return null;
  };
}
