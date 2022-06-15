import { Component, OnInit } from '@angular/core';
import { salesData } from 'src/assets/js/earning-chart';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  monthlySale: string
  monthlyPercent: number
  monthlyIndicator: string
  yearlySale: string
  yearlyPercent: number
  yearlyIndicator: string 


  constructor() {
    this.monthlySale = (salesData.monthlySale).toLocaleString('en-us', {minimumFractionDigits: 2})
    this.monthlyPercent = salesData.monthlyPercent
    this.monthlyIndicator = salesData.monthlyIndicator
    this.yearlySale = (salesData.yearlySale).toLocaleString('en-us', {minimumFractionDigits: 2})
    this.yearlyPercent = salesData.yearlyPercent
    this.yearlyIndicator = salesData.yearlyIndicator
    
   }
  ngOnInit(): void {
  }


}
