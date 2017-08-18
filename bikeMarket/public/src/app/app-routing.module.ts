import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { ShowBikeComponent } from './show-bike/show-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
