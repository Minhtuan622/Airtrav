import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.sass']
})
export class CreateTripComponent implements OnInit {
  public location = new FormControl('', [Validators.required])
  public traveller = new FormControl('', [Validators.required])
  public checkin = new FormControl('', [Validators.required])
  public checkout = new FormControl('', [Validators.required])

  constructor() {}
  ngOnInit(): void {}

  public getErrorLoc(){
    return this.location.hasError('required') ? 'Please enter your location' : ''
  }
  public getErrorTrav(){
    return this.location.hasError('required') ? 'Please enter your travellers' : ''
  }
  public getErrorIn(){
    return this.location.hasError('required') ? 'Please enter your check in' : ''
  }
  public getErrorOut(){
    return this.location.hasError('required') ? 'Please enter your checkout' : ''
  }

}
