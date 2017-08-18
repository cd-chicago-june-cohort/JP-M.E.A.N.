import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BikeService } from './bike.service';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { ShowBikeComponent } from './show-bike/show-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BikeOfDayComponent,
    BrowseComponent,
    ListingsComponent,
    ShowBikeComponent,
    EditBikeComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
