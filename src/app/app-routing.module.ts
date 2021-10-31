import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: BeerDetailComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'main', component: MainComponent },
  { path: 'main/:sort', component: BeersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }