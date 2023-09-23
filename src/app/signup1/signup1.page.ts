import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {

  constructor(private navCtrl: NavController, private registrationService: RegistrationService) { }
  email: string = '';
  password: string = '';

  onSignup1() {
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  SignUp1() {
    this.navCtrl.navigateForward('/homescreen');
  }

  ngOnInit() {
  }

}
