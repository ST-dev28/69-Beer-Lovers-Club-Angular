import { Component, OnInit } from '@angular/core';
import { Beer, Sort } from '../beer';
import { BeerService } from '../beer.service';
import { SortService } from '../sort.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  [x: string]: any;
  sorts: Sort[] = [];
  beers: Beer[] = [];

  constructor(private sortService: SortService, private beerService: BeerService, private mainService: MainService) { }

  ngOnInit() {
    this.getSorts();
    this.getBeers();
  }

  getSorts(): void {
    this.sortService.getSorts()
      .subscribe(sorts => this.sorts = sorts);
    // to use only first 4 items from the list: 
    //.subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
/*
  getListBySort(): Beer[] {
const sorting = Beer[] = [];
this.beers.forEach((item) => {
  if(item.sort) {
    sorting.push(item);
  }
});
return sorting;
  }
*/
  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
    // to use only first 4 items from the list: 
    //.subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

