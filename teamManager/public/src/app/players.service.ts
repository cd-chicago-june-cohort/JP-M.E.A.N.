import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayersService {

  constructor(private _http: Http) { }

  add(newPlayer) {
    console.log('MADE IT TO ADD IN THE SERVICE');
    return this._http.post('/api/add', newPlayer)
    .map(data => data.json())
    .toPromise();
  }

  showAll() {
    return this._http.get('/api/show')
    .map(data => data.json())
    .toPromise();
  }

  destroy(doomedPlayer) {
    console.log(doomedPlayer);
    return this._http.post('/api/destroy', doomedPlayer)
    .map(data => data.json())
    .toPromise();
  }

  changeGame1Status(playerId, newStatus) {
    let context = {
      'playerId': playerId,
      'newStatus': newStatus
    }
    return this._http.post('/api/game1change', context)
    .map(data => data.json())
    .toPromise();
  }

  changeGame2Status(playerId, newStatus) {
    let context = {
      'playerId': playerId,
      'newStatus': newStatus
    }
    return this._http.post('/api/game2change', context)
    .map(data => data.json())
    .toPromise();
  }

  changeGame3Status(playerId, newStatus) {
    let context = {
      'playerId': playerId,
      'newStatus': newStatus
    }
    return this._http.post('/api/game3change', context)
    .map(data => data.json())
    .toPromise();
  }

}
