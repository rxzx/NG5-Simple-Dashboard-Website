import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './header/header.component';
import { PublicFooterComponent } from './footer/footer.component';
import { PublicSigninComponent } from './signin/signin.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabFourComponent } from './tab-four/tab-four.component';
import { PublicHomeComponent } from './home/home.component';



@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        PublicSigninComponent,
        PublicHeaderComponent,
        PublicFooterComponent,
        PublicHomeComponent,
        TabOneComponent,
        TabTwoComponent,
        TabThreeComponent,
        TabFourComponent
    ],
})
export class PublicModule { }
