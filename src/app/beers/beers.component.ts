import { Component, OnInit } from '@angular/core';
import { Beer, FoodPairing} from '../beer';
//import { BEERS } from '../mock-beers';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

//beers = BEERS;
 beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers()
        .subscribe(beers => this.beers = beers);
  }
}
