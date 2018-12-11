
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { TabOneComponent } from './public/tab-one/tab-one.component';
import { TabTwoComponent } from './public/tab-two/tab-two.component';
import { TabThreeComponent } from './public/tab-three/tab-three.component';
import { TabFourComponent } from './public/tab-four/tab-four.component';
import { PublicSigninComponent } from './public/signin/signin.component';
import { PublicHomeComponent } from './public/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AlwaysAuthGuard],
    children: [
      { path: 'sign-in', component: PublicSigninComponent, data: { title: 'Sign In' } },
      { path: 'home', component: PublicHomeComponent, data: { title: 'home' } },
      { path: 'tab-one', component: TabOneComponent, data: { title: 'tab-one' } },
      { path: 'tab-two', component: TabTwoComponent, data: { title: 'tab-two' } },
      { path: 'tab-three', component: TabThreeComponent, data: { title: 'tab-three' } },
      { path: 'tab-four', component: TabFourComponent, data: { title: 'tab-four' } }
    ]
  },
  {
    path: 'admin',
    component: PrivateComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
