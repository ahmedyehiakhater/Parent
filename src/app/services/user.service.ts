import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  host: string = 'https://reqres.in';
  constructor(private http: HttpClient) { }

  /**
   * Calls API to login user
   */
  loginUser(username, password) {
    var userCredentials = {
      "email": username,
      "password": password
    }
    return this.http.post(`${this.host}/api/login`, userCredentials);
  }
}
