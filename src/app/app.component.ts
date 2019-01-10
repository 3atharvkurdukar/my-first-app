import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.signupForm.form.patchValue({
      userData: suggestedName
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
