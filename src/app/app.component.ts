import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.forbiddenName]),
      'name': new FormControl(null, Validators.required, this.forbiddenNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({'nameForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
  }
}
