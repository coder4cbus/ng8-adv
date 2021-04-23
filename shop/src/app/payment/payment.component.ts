import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ccExpiry, ccNumber } from '../cc.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      ccNumber: new FormControl('', [Validators.required], 
      [ccNumber(this.http)]),
      ccExp: new FormControl('', [Validators.required, ccExpiry]),
      ccCVC: new FormControl('', [Validators.required]),
      couponCode: new FormControl
    })
  }

  makePayment() {
    console.log(this.paymentForm.value)
  }

}

// Visa: 4111111111111111
// MasterCard: 5555555555554444
