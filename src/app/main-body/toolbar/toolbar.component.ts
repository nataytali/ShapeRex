import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  toolbarItemsImgUrls = ["assets/img/search.png", "assets/img/notification.png", "assets/img/message.png", "assets/img/Benedict-Cumberbatch.png"]
  ngOnInit(): void {
  }

}
