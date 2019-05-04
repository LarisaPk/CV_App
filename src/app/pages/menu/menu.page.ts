// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
// added import for alart
import { AlertController } from '@ionic/angular';
// imports for authentication
import { AngularFireAuth } from '@angular/fire/auth';

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
    icon: 'paper' // added icon for menu CV
  },
  {
    title: 'My Projects', // page with my projects
    url: '/menu/second',
    icon: 'hammer'// added ion for menu projects
  },
  {
    title: 'Skills', // page with my Skills
    children: [
      {
        title: 'Soft Skills', // subcategory page with Soft Skills
        url: '/menu/soft',
        icon : 'happy'
      },
      {
        title: 'Technical Skills', // subcategory page with Technical Skills
        url: '/menu/technical',
        icon : 'laptop'
      }
    ]
    },
  {
    title: 'Extra curriculum', // page with extra curriculum
    url: '/menu/curriculum',
    icon: 'cube'// added icon for menu curriculum
  }
];
selectedPath = ''; // set new variable

// modified constructor and subscribed to the change event, added Alert controller and authentication to the construction for fruther use
  constructor(private router: Router, public alertController: AlertController, public afAuth: AngularFireAuth) {
    this.router.events.subscribe ((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;

      }
    });
  }

  ngOnInit() {
  }
  // function that shows confirmation alert with OK and Cancel buttons. If OK presse - loggs out and redirects to login page
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation alert',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.afAuth.auth.signOut().then (() => {
              this.router.navigate (['login']);
            });
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
