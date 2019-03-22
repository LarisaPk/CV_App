// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '', // add children of menu page
    component: MenuPage,
    children: [
      {
      path: 'first',
      loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' 
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule' 
        }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
