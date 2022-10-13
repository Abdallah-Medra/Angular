import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {
  birthDate: any;

  transform(value: number): number {
    return this.birthDate.find((item: { key: number; })=>item.key==value)?.value!;
  }
  id="2930422001718"
  BirthDate:{key:string,value:string}[]=[
    {key:this.id,value:"22/04/1993"}]


}
