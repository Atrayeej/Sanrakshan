import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private navCtrl: NavController, private registrationService: RegistrationService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

   email: string = '';
  password: string = '';

  onLogIn() {
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  LogIn() {
    this.navCtrl.navigateForward('/homescreen');
  }

  LogInwithGoogle() {

  }

  LogInwithFacebook() {

  }

  ngOnInit() {
  }

}
