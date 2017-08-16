import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return 'no age';
    }

    const birthdate: any = new Date(value);
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);

    return `${years} years old`;
  }
}

const now = Date.now();
