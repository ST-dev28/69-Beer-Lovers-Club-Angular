import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  beers: Beer[] = [];
  filter:string='';

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
    this.beerService.filterSub.subscribe((filter)=>{
      this.filter=filter;
    })
  }

  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
      // to use only first 4 items from the list: 
      //.subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  }

