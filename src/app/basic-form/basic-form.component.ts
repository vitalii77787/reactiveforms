// reactive forms module import
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: 'default message',
      career: ''
    });
    // this.myForm.valueChanges.subscribe(console.log);
  }
  onDisplay = () => {
    console.log(this.myForm.value);
  }
}
