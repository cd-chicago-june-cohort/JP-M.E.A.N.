import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { BikeService } from '../bike.service';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _bikeService: BikeService, private _router: Router) { }

  ngOnInit() {
  }

  passwordMatch = false;
  checkPassword() {
    if (this.user.password === this.user.confirmPassword) {
      this.passwordMatch = true;
    }
  }

  user = new User
  duplicateEmail = [];

  registrationAttempt() {
    this._bikeService.regAttempt(this.user)
      .then(data => this.duplicateEmail = data)
      .catch(err => console.log(err));
    if (this.duplicateEmail.length == 0) {
      this._router.navigateByUrl('/success');
    }
  }


  attemptedUser = {
    email: '',
    password: ''
  }
  currentUserArr = []
  loginAttempt() {
    console.log("ATTEMPTING LOGIN");
    this._bikeService.loginAttempt(this.attemptedUser)
      .then(userArr => {
        this.currentUserArr = userArr;
        if (userArr.length >= 1) {
          this._router.navigateByUrl('/success');
        }
      }).catch(err => console.log(err));

  }



}
