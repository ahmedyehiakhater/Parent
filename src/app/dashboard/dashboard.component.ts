import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { ListUsersComponent } from '../list-users/list-users.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@NgModule({
  imports: [
    DashboardHeaderComponent,
    ListUsersComponent
  ]
})
export class DashboardComponent implements OnInit {
  isClicked: boolean;
  userObject: object;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getUser(userData) {
    this.userObject = userData;
  }
  checkClosed(closed: boolean) {
    console.log("Inside closed");
    if (closed) {
      this.isClicked = false;
    }
  }
  checkClicked(clicked: boolean) {
    this.isClicked = clicked;
    console.log("is clicked?", this.isClicked);
  }
}
