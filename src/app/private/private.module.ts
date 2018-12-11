import { NgModule } from '@angular/core';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PrivateFooterComponent } from './private-footer/private-footer.component';
import { PrivateComponent } from './private.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';



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
        PrivateComponent,
        PrivateHeaderComponent,
        PrivateFooterComponent,
        DashboardComponent
    ],
})
export class PrivateModule { }
