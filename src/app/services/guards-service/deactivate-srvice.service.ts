import { BookComponent } from './../../components/book/book.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class DeactivateSrviceService implements CanDeactivate<BookComponent> {

  constructor() { }

  canDeactivate(component: BookComponent,
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.state;

  }

  state: boolean;
  isConfirmed(state) {
    this.state = state;
  }

}
