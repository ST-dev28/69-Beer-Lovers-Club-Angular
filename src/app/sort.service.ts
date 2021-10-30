import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sort } from './beer';
import { SORTS } from './mock-sorts';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private messageService: MessageService) { }

  getSorts(): Observable<Sort[]> {
    const sorts = of(SORTS);
    //this.messageService.add('fetched');
    return sorts;
  }

  getSort(id: number): Observable<Sort> {
    // For now, assume that a beer with the specified `id` always exists.
    const sort = SORTS.find(s => s.id === id)!;
    //this.messageService.add(`fetched id: ${id}`);
    return of(sort);
  }
}
