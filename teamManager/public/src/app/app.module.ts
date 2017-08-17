import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayersService } from './players.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { StatusComponent } from './status/status.component';
import { AddComponent } from './manage/add/add.component';
import { ListComponent } from './manage/list/list.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    StatusComponent,
    AddComponent,
    ListComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
