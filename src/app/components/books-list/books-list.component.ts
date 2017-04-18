
import { CanActivateAuthGuardService } from './../../services/guards-service/can-activate-auth-guard.service';
import { Location } from '@angular/common';
import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ServiceModule } from './../../modules/service-module/service-module.module';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [ServiceModule],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class BooksListComponent implements OnInit {

  constructor(
    private location: Location, private http: Http,
    private canActivateService: CanActivateAuthGuardService,
    private ServiceModule: ServiceModule) {

  }

  ngOnInit() {
    this.getBooks();
  }

  // tslint:disable-next-line:member-ordering
  booksList: Array<any>;
  getBooks() {
    this.http.get('../../../../public/books.json').subscribe((data) => {
      this.booksList = data.json();
    });

  }

  back() {
    this.location.back();
  }


}