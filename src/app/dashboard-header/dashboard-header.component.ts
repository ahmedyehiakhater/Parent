import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../services/user.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private modalService: NgxSmartModalService, private userService: UserService,
    private router: Router, private toastrService: ToastrService) { }
  username: string;
  jobTitle: string;
  ngOnInit() {
  }
  /**
   * Adds new user and triggers toastr on success
   */
  addUser() {
    console.log("User name ", this.username, "title ", this.jobTitle)
    this.userService.addUser(this.username, this.jobTitle).subscribe(
      success => {
        this.toastrService.success("User has been added!", "", { "positionClass": "toast-top-center" });
        console.log("user added", success)
        this.modalService.close("addModal");
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
