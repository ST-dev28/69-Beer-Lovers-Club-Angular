import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer, FoodPairing} from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
 beers: Beer[] = [];
 sort?:string|null;

  constructor(private beerService: BeerService, private route:ActivatedRoute) { }

  ngOnInit() {
   
   
    if (this.route.snapshot.paramMap.get("sort")){
      this.sort=this.route.snapshot.paramMap.get("sort");
    }
    
   this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers(this.sort)
        .subscribe(beers => this.beers = beers);
  }
}
