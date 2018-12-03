
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { PublicSigninComponent } from './signin/signin.component';
import { PublicHomeComponent } from './home/home.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabFourComponent } from './tab-four/tab-four.component';

// import { PrivateComponent } from './private/private.component';
// import { PrivateHomeComponent } from './private/home/home.component';
// import { GalleryComponent } from './private/gallery/gallery.component';
// import { DemoChartsComponent } from './private/demo-charts/demo-charts.component';
// import { FeatureComponent } from './private/feature/feature.component';
// import { FormLoaderComponent } from './private/form-loader/form-loader.component';
// import { AboutComponent } from './private/static-pages/about/about.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    // component: PublicComponent,
    canActivate: [AlwaysAuthGuard],
    children: [
      { path: 'sign-in', component: PublicSigninComponent, data: { title: 'Sign In' } },
      { path: 'home', component: PublicHomeComponent, data: { state: 'home' } },
      { path: 'tab-one', component: TabOneComponent, data: { state: 'tab-one' } },
      { path: 'tab-two', component: TabTwoComponent, data: { state: 'tab-two' } },
      { path: 'tab-three', component: TabThreeComponent, data: { state: 'tab-three' } },
      { path: 'tab-four', component: TabFourComponent, data: { state: 'tab-four' } },

    ]
  },
  // {
  //   path: 'admin',
  //   component: PrivateComponent,
  //   canActivate: [OnlyLoggedInUsersGuard],
  //   children: [
  //     { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
  //     { path: 'home', component: PrivateHomeComponent },
  //     { path: 'gallery', component: GalleryComponent },
  //     { path: 'demo-charts', component: DemoChartsComponent },
  //     { path: 'features', component: FeatureComponent },
  //     { path: 'form-loader', component: FormLoaderComponent },
  //     {
  //       path: 'static-pages',
  //       children: [
  //         { path: '', redirectTo: 'admin/static-pages/about', pathMatch: 'full' },
  //         { path: 'about', component: AboutComponent },
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
