import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  // Function to navigate to the agency registration page
  navtoSignUpPage1() {
    this.navCtrl.navigateForward('/signup');
  }

  // Function to navigate to the user registration page
  navtoSignUpPage2() {
    this.navCtrl.navigateForward('/signup1');
  }
}
