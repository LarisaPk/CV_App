// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
// added array of pages

pages = [// array of pages in the menu
  {
    title: 'CV Larisa Pyykölä', // cv page
    url: '/menu/first',
    icon: 'paper' //added icon for menu CV
  },
  {
    title: 'My Projects', // page ith my projects
    url: '/menu/second',
    icon: 'hammer'// added ion for menu projects
  },
  {
    title: 'Extra curriculum', // page with extra curriculum
    url: '/menu/curriculum',
    icon: 'cube'// added icon for menu curriculum
  }


];

selectedPath = ''; // set new variable

// modified constructor and subscribe to the change event
  constructor(private router: Router) {
    this.router.events.subscribe ((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;

      }
    });
  }

  ngOnInit() {
  }

}
