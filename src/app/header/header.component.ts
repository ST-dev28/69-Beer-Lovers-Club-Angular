import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText = '';

  constructor(private router: Router, private beerService: BeerService ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
  
    this.router.navigate(['/home']).then(()=>{
       this.beerService.filterSub.next(form.value.search);
    });
  }

}
