import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dc-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class Login implements OnInit {
  public contactLogInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    
  }

  public submitForm(): void{
    console.log( this.contactLogInForm.value)
  }
}
