// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '', // add children of menu page that will be loaded in the menu on the left
    component: MenuPage,
    children: [
      {
      path: 'first', // page that contains my CV and tabs
      loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
      path: 'second', // page with my projcts
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
      path: 'curriculum', // page with extra curriculum
      loadChildren: '../curriculum/curriculum.module#CurriculumPageModule'
      },
      {
        path: 'soft', // page with  soft skills
        loadChildren: '../soft/soft.module#SoftPageModule'
      },
      {
        path: 'technical', // page with  technical skills
        loadChildren: '../technical/technical.module#TechnicalPageModule'
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
