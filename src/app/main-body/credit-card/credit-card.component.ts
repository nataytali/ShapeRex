import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  cardNumber: String
  accountName: String
  cardStatus: String
  expireDate: String
  shortName: String
  cardType: String

  constructor() { 
    this.cardNumber = "2345 6789 0123 4567"
    this.accountName = "Subash Chandra"
    this.cardStatus = "Active"
    this.expireDate = "09/24"
    this.shortName = this.accountName.substring(0, this.accountName.indexOf(' '))
    this.cardType = "Visa"

  }

  ngOnInit(): void {
  }

}
