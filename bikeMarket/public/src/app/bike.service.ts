import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  regAttempt(user) {
    console.log('MADE IT REGATTEMPT IN SERVICE');
    return this._http.post('/api/reg', user)
    .map(data => data.json())
    .toPromise();
  }

  loginAttempt(user) {
    console.log('GOT TO THE LOGIN SERVICE');
    return this._http.post('/api/login', user)
    .map(data => data.json())
    .toPromise();
  }

}
