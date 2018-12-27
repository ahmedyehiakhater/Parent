import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService, private router: Router) {

  }
  /**
   * Logs in user and sets token in local storage
   */
  login() {
    this.userService.loginUser(this.username, this.password).subscribe(
      success => {
        localStorage.setItem("token", success['token']);
        this.router.navigate(['dashboard']);
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
