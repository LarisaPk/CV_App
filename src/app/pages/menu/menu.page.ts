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

pages = [
  {
    title: 'First with tabs',
    url: '/menu/first'
  },
  {
    title: 'second page',
    url: '/menu/second'
  }

];

selectedPath = ''; // set new variable

// modified constructor and subscribe to the change event
  constructor(private router: Router) {
    this.router.events.subscribe ((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;

      }
    })
  }

  ngOnInit() {
  }

}
