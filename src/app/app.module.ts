import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerDetailComponent,
    HomeComponent,
    MessagesComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
