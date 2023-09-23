import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController, private registrationService: RegistrationService) { }

  email: string = '';
  password: string = '';

  onSignup() {
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }


  
  signUp() {
    this.navCtrl.navigateForward('/homescreen');
  }

  ngOnInit() {
  }

}
