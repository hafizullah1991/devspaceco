import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dc-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class Signup implements OnInit{
public contactSignupForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  repeatpassword: new FormControl('')
});
ngOnInit(): void {}
  public submitForm(): void{
console.log(this.contactSignupForm.value)
  }

}
