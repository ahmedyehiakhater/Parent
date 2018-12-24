import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isClicked: boolean;
  userObject: object;
  constructor() { }

  ngOnInit() {
  }
  getUser(userData) {
    this.userObject = userData;
    console.log("user data in db component", this.userObject);
  }
  checkClicked(clicked: boolean) {
    this.isClicked = clicked;
    console.log("is clicked?", this.isClicked);
  }
}
