import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Output() isClicked = new EventEmitter<object>();
  constructor() { }
  userData={
    "name":"Ahmed Yehia",
    "gender":"Male"
  }
  ngOnInit() {
  }
  toggleClick() {
    this.isClicked.emit(this.userData)
  }
}
