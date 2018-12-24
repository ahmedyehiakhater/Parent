import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isClicked: boolean;
  userObject:object;
  constructor() { }

  ngOnInit() {
  }
  checkClicked(userObject: object) {
    this.userObject = userObject;
    this.isClicked = !this.isClicked;
    console.log("is clicked?", this.isClicked);
  }
}
