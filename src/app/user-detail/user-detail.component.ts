import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userData: object;
  @Output() isClosed = new EventEmitter<boolean>();
  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private router: Router,
    private toastrService: ToastrService, private modalService: NgxSmartModalService) {
    this.getUserId();
  }

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
  /**
   * Deletes selected User, navigates back to dashboard and closes router component
   */
  deleteUser() {
    this.userService.deleteUser(this.userData['id']).subscribe(
      success => {
        this.toastrService.info("User has been deleted!", "", { "positionClass": "toast-top-center" });
        console.log("user deleted", success)
        this.modalService.close("deleteModal");
        this.router.navigate(['/dashboard']);
        this.isClosed.emit(true);
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  ngOnInit() {
  }

}
