import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  constructor(private _playerService: PlayersService) { }

  ngOnInit() {
    this.showPlayers();
  }

  allPlayers;

  showPlayers() {
    this._playerService.showAll()
    .then(results => this.allPlayers = results)
    .catch(err => console.log(err));
  }


  changeGame1Status(playerId, newStatus) {
    this._playerService.changeGame1Status(playerId, newStatus)
    .catch(err => console.log(err));
    this.showPlayers();
  }


}
