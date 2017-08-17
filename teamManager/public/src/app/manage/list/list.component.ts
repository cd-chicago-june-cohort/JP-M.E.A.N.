import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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


  destroy(i) {
    console.log(i);
    let doomedPlayer = this.allPlayers[i];
    console.log(doomedPlayer);
    this._playerService.destroy(doomedPlayer)
    .catch(err => console.log(err));
    this.showPlayers();
  }



}
