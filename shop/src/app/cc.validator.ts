import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

export function ccExpiry(control: AbstractControl) : ValidationErrors {
    let value = "" + control.value
    let parts = value.split("/")
    let invalid = {invalid: true}

    if (parts.length != 2) {
        return invalid
    }

    let month = parseInt(parts[0])
    let year = parseInt(parts[1])

    if (month == NaN || year == NaN || month > 12) {
        return invalid
    }

    let today = new Date()
    let thisYear = today.getFullYear() - 2000

    if (year < thisYear) {
        return invalid
    } else if (year == thisYear && month <= today.getMonth() + 1) {
        return invalid
    } 

    return null //Valid!
}

class ValidationResponse {
    valid: boolean
}


export function ccNumber(http: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      let body = { ccNumber: "" + control.value }

      return timer(600).pipe(
        flatMap(_ => http.post<ValidationResponse>("/api/payment/validate", body)
            .pipe(map(result => result.valid ? null : result)))
      )
    }
  }