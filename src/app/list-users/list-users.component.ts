import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Output() selectedUser = new EventEmitter<object>();
  @Output() isClicked = new EventEmitter<boolean>();
  users: object;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAllUsers();
  }
  /**
   * Calls List Users API and saves data in users variable
   */
  getAllUsers() {
    this.userService.listUsers().subscribe(
      success => {
        this.users = success['data'];
      },
    );
  }
  /**
   * Detects user selected event and emits it to parent component dashboard
   */
  viewUser(index) {
    this.selectedUser.emit(this.users[index]);
    this.isClicked.emit(true);
    console.log("user", this.users[index]);
  }
}
