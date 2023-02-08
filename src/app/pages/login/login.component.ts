import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public hide:boolean = true
  public email = new FormControl('', [Validators.required, Validators.email])
  public firstName = new FormControl('', [Validators.required])
  public lastName = new FormControl('', [Validators.required])

  constructor() {}
  ngOnInit(): void {}

  public getErrorMessage(){
    if (this.email.hasError('required')) return 'You must enter a value'
    return this.email.hasError('email') ? 'Not a valid email' : ''
  }
  public getErrorFN(){
    return this.firstName.hasError('required') ? 'You must enter your first name' : ''
  }
  public getErrorLN(){
    return this.lastName.hasError('required') ? 'You must enter your last name' : ''
  }
}
