import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private navCtrl: NavController, private registrationService: RegistrationService, private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      orgName: ['', Validators.required],
      orgType: ['', Validators.required],
      location: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      description: [''],
    });
  }

  email: string = '';
  password: string = '';

  onSignup() {
    
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form Data:', formData);
      // You can send the form data to your registration service here
    }
    
    //console.log('Email:', this.email);
    //console.log('Password:', this.password);
    
  }


  
  signUp() {
    this.navCtrl.navigateForward('/homescreen');
  }

 

  ngOnInit() { }

}
