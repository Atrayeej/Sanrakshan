import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  signupForm: FormGroup;

  constructor(private navCtrl: NavController, private registrationService: RegistrationService, private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Name: ['', Validators.required],
      userid: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      
    });
  }
  email: string = '';
  password: string = '';

  onSignup1() {
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  SignUp1() {
    this.navCtrl.navigateForward('/homescreen');
  }

  signInwithGoogle() {

  }

  signInwithFacebook() {

  }

  ngOnInit() {
  }

}
