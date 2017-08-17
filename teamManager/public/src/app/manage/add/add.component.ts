import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from "../../player";
import { PlayersService } from '../../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _playerService: PlayersService, private _router: Router) { }

  ngOnInit() {
  }

  player = new Player

  addPlayer() {
    this._playerService.add(this.player);
    this._router.navigateByUrl('/manage/list');
  }


}
