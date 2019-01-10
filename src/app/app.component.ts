import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') myForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  myFormData = {
    email: '',
    password: '',
    subscription: ''
  };

  onSubmit() {
    this.submitted = true;

    this.myFormData.email = this.myForm.value.email;
    this.myFormData.password = this.myForm.value.password;
    this.myFormData.subscription = this.myForm.value.subscription;
    console.log(this.myFormData);

    this.myForm.reset();
  }
}
