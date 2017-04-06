
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { GanerComponent } from './components/ganer/ganer.component';
import { StoreComponent } from './components/store/store.component';
import { RoutingModule } from './modules/routing/routing.module';
import { BooksListComponent } from './components/books-list/books-list.component';

import { ServiceModule } from './modules/service-module/service-module.module';

import { CanActivateAuthGuardService } from './services/guards-service/can-activate-auth-guard.service';
import { DeactivateSrviceService } from './services/guards-service/deactivate-srvice.service';

import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from './interceptor/factory';
import { InterceptedHttp } from './interceptor/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    GanerComponent,
    StoreComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ServiceModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions],
    },
    InterceptedHttp,
    CanActivateAuthGuardService,
    DeactivateSrviceService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


