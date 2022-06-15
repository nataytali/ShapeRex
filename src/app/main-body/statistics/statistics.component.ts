import { Component, OnInit } from '@angular/core';
import { updateStatsLabel, updateStatsYear } from 'src/assets/js/app';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  selectedYear: string = '0'
  selectedLabel: string = '0'

  constructor() { }

  ngOnInit(): void {
  }
  
  updateYear(event: Event | any){
    this.selectedYear = event.target.value;
    if(this.selectedYear)
      updateStatsYear(Number.parseInt(this.selectedYear))
  }

  updateLabel(event: Event | any){
    this.selectedLabel = event.target.value
    if(this.selectedLabel)
     updateStatsLabel(Number.parseInt(this.selectedLabel))
  }

}
