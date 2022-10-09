import { Pipe, PipeTransform } from '@angular/core';
import categories from 'src/static/categories.service';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  transform(categoryId: number, ): string {
    return categories.find((category)=>{
      return category.id === categoryId
    })?.name || "Unknown category";
  }

}
