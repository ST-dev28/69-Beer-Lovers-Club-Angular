import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from './beer';
import { BEERS } from './mock-beers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private messageService: MessageService) { }

  getBeers(): Observable<Beer[]> {
    const beers = of(BEERS);
    this.messageService.add('fethed');
    return beers;
  }

  getBeer(id: number): Observable<Beer> {
    // For now, assume that a beer with the specified `id` always exists.
     const beer = BEERS.find(b => b.id === id)!;
    this.messageService.add(`fetched id: ${id}`);
    return of(beer);
  }
}