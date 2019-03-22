// Larisa Pyykölä, student number 1702357
// added pathes to tabs (children)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabsPage } from './first-with-tabs.page';

const routes: Routes = [
  {
    path: 'tabs', // rename this component to tabs an add array of children
    component: FirstWithTabsPage,
    children: [
      {
        path: 'tab1',// tab about me
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2', // tab my education 
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab3', // tab contacts
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  },
  {
    path: '', // redirect to tab1 from empty path (it will be shown when user clicks login)
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}
