// Larisa Pyykölä, student number 1702357
// added path to tabs

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
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      }
    ]
  },
  {
    path: '', // redirect to tab1 from empty path
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
