import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selected: Date;
  calendarIconPath = "assets/img/calendar-icon.png"
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  constructor() { 
    this.selected = new Date()
   
  }

  ngOnInit(): void {
  }

}
