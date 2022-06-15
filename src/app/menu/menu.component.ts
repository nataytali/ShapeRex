import { Component} from '@angular/core';


@Component({
  selector: 'app-menu',
  template: `
  <div class="menu-bg">
    <div class="menu-section">
      <p id="logo"><img  src="assets/img/logo.png" width="20px" height="20px"/>&nbsp;ShapeRex</p>
      <mat-sidenav-container class="menu">
        <mat-sidenav-content *ngFor="let item of menuItems; let i=index" type="button" id="menu-item-{{i}}">
          <a *ngIf="i!=6" routerLink="/403" >
            <img  src={{imgs[i]}} width="15px" height="15px"/>&nbsp;&nbsp;{{item}}
          </a>
          <a *ngIf="i==6"  routerLink="/403" >
            <img  src={{imgs[i]}} width="10px" height="15px"/>&nbsp;&nbsp;{{item}}       
          </a>
          </mat-sidenav-content>
        <mat-sidenav-content routerLink="/403" id="logout" type="button"><img  src="assets/img/logout.png" width="18px" height="15px"/>&nbsp;&nbsp;Logout</mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  </div>`,
  styleUrls:['./menu.component.scss']
})


export class MenuComponent {
  
    menuItems = 
    ["Dashboard", "My Task", "My Project", "My Wallet", "History Data", "Invoice", "Helps"];
    imgs = ["assets/img/dashboard.png", "assets/img/my-task.png",
    "assets/img/my-project.png","assets/img/my-wallet.png",
    "assets/img/history-data.png","assets/img/invoice.png","assets/img/helps.png"]
  
}
