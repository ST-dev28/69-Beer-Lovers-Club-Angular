import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from './beer';
import { BEERS } from './mock-beers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private messageService: MessageService) { }

  getBeers(sort?:string|null): Observable<Beer[]> {
    const beers = of(BEERS);
    
    //this.messageService.add('fetched');
    return beers.pipe(map((beers:Beer[])=>{
      if (!sort) return beers;
      const tmpBeers:Beer[]=[];
      beers.forEach(beer=>{
        if (beer.sort==sort){
          tmpBeers.push(beer);
        }
      })
      return tmpBeers;
    }));
  }

  getBeer(id: number): Observable<Beer> {
    // For now, assume that a beer with the specified `id` always exists.
     const beer = BEERS.find(b => b.id === id)!;
    //this.messageService.add(`fetched id: ${id}`);
    return of(beer);
  }
}