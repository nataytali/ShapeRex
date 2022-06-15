import { DecimalPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { earningData } from 'src/assets/js/app'

@Component({
  selector: 'earning-in-month',
  templateUrl: './earning-in-month.component.html',
  styleUrls: ['./earning-in-month.component.scss']
})
export class EarningInMonthComponent implements OnInit {

  deposit: string | number
  expense: string | number
  payable: string | number
  percent

  constructor() { 
    this.deposit = (earningData.deposit).toLocaleString('en-us', {minimumFractionDigits: 2})
    this.expense = (earningData.expense).toLocaleString('en-us', {minimumFractionDigits: 2})
    this.payable = (earningData.payable).toLocaleString('en-us', {minimumFractionDigits: 2})
    this.percent = earningData.percentOne + earningData.percentTwo + earningData.percentThree
  }

  ngOnInit(): void {
  }

}
