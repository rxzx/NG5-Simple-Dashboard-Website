import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTPService } from './Providers/httpservice';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StorageService } from './Providers/storageservice';
import { MyHttpInterceptor } from './Providers/my-http-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    ReactiveFormsModule,    ToastrModule.forRoot(),
  ],
  exports: [
    ToastrModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClient,
    HTTPService,
    StorageService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
