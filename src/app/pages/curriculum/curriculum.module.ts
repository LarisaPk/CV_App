// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurriculumPage } from './curriculum.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // added import
const routes: Routes = [
  {
    path: '',
    component: CurriculumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule, // added this
    RouterModule.forChild(routes)
  ],
  declarations: [CurriculumPage]
})
export class CurriculumPageModule {}
