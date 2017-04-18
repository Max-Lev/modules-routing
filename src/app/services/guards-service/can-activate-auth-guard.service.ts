import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CanActivateAuthGuardService implements CanActivate {

  loginState: boolean = false;
  constructor() { }

  // route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  canActivate(): boolean {
    return this.loginState;
  };


  setState(state) {
    this.loginState = state;
    console.log('service state', state);
  }

  getInitialState(): boolean {
    return this.loginState;
  }

}
