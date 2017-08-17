import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

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
  
  
    changeGame3Status(playerId, newStatus) {
      this._playerService.changeGame3Status(playerId, newStatus)
      .catch(err => console.log(err));
      this.showPlayers();
    }

}
