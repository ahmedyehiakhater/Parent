import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginError: boolean;
  errorMessage: string;
  constructor(private userService: UserService) {

  }
  /**
   * Handles user login 
   */
  login() {
    this.userService.loginUser(this.username, this.password).subscribe(
      success => {
        localStorage.setItem("token", success['token']);
        console.log("Success", success['token']);
      },
      error => {
        this.loginError = true;
        this.errorMessage = error.error.error;
      }
    );
  }
  ngOnInit() {
  }

}
