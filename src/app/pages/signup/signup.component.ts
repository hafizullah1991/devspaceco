import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component ({
  selector: 'dc-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class Signup implements OnInit {
  public contactSignupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatpassword: new FormControl('', Validators.required)
  });
  ngOnInit(): void {}
  public submitForm(): void{
    console.log(this.contactSignupForm.value)
  }

}
