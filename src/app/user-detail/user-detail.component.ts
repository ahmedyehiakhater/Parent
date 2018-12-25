import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userData: object;
  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
    this.getUserId();
  }

  @Input() userObject: object;
  /**
   * Subscribes to params observable to check for userId
   */
  getUserId() {
    this.activeRoute.params.subscribe(params => {
      this.getUser(params['id']);
    });
  }
  /**
   * Gets selected User Data 
   * @param userId 
   */
  getUser(userId) {
    this.userService.getUser(userId).subscribe(
      next => {
        this.userData = next['data'];
      },
      error => {
        console.log("error", error);
      }
    );
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(
      success => {
        console.log("user deleted", success)
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  ngOnInit() {
  }

}
