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
import { PublicHeaderComponent } from './header/header.component';
import { PublicFooterComponent } from './footer/footer.component';
import { PublicHomeComponent } from './home/home.component';
import { PublicSigninComponent } from './signin/signin.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabFourComponent } from './tab-four/tab-four.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent, 
    PublicFooterComponent, 
    PublicHomeComponent, 
    PublicSigninComponent, 
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
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
