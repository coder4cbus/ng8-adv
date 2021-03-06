import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ccExpiry, ccNumber } from '../cc.validator';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  paymentForm:FormGroup
  showProgress = false
  subscription: Subscription 

  constructor(private http:HttpClient, private cartSvc:CartService) { }

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
    this.showProgress = true
    this.cartSvc.makePayment(this.paymentForm.value).subscribe (
      _ => this.showProgress = false,
      _ => this.showProgress = false
    )
    console.log(this.paymentForm.value)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

// Visa: 4111111111111111
// MasterCard: 5555555555554444
