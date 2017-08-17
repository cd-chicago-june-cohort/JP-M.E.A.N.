import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

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
  
  
    changeGame2Status(playerId, newStatus) {
      this._playerService.changeGame2Status(playerId, newStatus)
      .catch(err => console.log(err));
      this.showPlayers();
    }

}
