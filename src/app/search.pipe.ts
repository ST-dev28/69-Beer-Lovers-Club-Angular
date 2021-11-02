import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer';
//import { Beer } from './beer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Beer[], searchText: string): Beer[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {

      let result= it.name.toLocaleLowerCase().includes(searchText);
      if (result) return true;
      result= it.description.toLocaleLowerCase().includes(searchText);

      return result;
    });
  }
}