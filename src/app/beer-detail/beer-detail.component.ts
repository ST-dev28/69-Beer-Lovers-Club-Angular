import { Component, OnInit, } from '@angular/core';
import { Beer } from '../beer';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
 beer: Beer | undefined;

  constructor(private route: ActivatedRoute, private beerService: BeerService, private location: Location) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beerService.getBeer(id)
      .subscribe(beer => this.beer = beer);
  }

  goBack(): void {
    this.location.back();
  }
}
