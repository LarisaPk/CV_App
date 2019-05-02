// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ // after users logs in it redirects to the login page and after login buttin is clicket it goes to menu
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },



 /*
 * we do not need these pathes here anymore, I commented them out in case I later need them here
*
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'curriculum', loadChildren: './pages/curriculum/curriculum.module#CurriculumPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
