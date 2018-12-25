import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isClicked: boolean;
  userObject: object;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getUser(userData) {
    this.userObject = userData;
    // this.router.navigate(['/user', this.userObject['id']]);
    console.log("user data in db component", this.userObject);
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
