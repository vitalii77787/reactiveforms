import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.scss']
})
export class FormWithValidationComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      confirm: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.minLength(2), Validators.min(18), Validators.max(65)]],
      agree: [false, [Validators.requiredTrue]]
    }, {validator: matchingFields('password', 'confirm')});
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get agree() {
    return this.myForm.get('agree');
  }
  get age() {
    return this.myForm.get('age');
  }
  get confirm() {
    return this.myForm.get('confirm');
  }

  onDisplay = () => {
    console.log({
      email: this.email.value,
      password: this.password.value,
      age: this.age.value
    });
  }
}
function matchingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
    return {mismatchedFields: true};
    }
  };
}
