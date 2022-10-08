import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayByKey'
})
export class FilterArrayByKeyPipe implements PipeTransform {

  transform<T>(arr: T[], key : string , filterValue : unknown): T[] {
if(!filterValue){
  return arr
}
    return arr.filter((x :any )=> x[key] === filterValue);
  }

}
