
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { PublicSigninComponent } from './signin/signin.component';
import { PublicHomeComponent } from './home/home.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabFourComponent } from './tab-four/tab-four.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    // canActivate: [AlwaysAuthGuard],
    children: [
      { path: 'sign-in', component: PublicSigninComponent, data: { title: 'Sign In' } },
      { path: 'home', component: PublicHomeComponent, data: { state: 'home' } },
      { path: 'tab-one', component: TabOneComponent, data: { state: 'tab-one' } },
      { path: 'tab-two', component: TabTwoComponent, data: { state: 'tab-two' } },
      { path: 'tab-three', component: TabThreeComponent, data: { state: 'tab-three' } },
      { path: 'tab-four', component: TabFourComponent, data: { state: 'tab-four' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
