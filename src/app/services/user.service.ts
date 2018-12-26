import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  host: string = 'https://reqres.in';
  constructor(private http: HttpClient) { }

 /**
  * Calls API to login User
  * @param username 
  * @param password 
  */
  loginUser(username, password) {
    var userCredentials = {
      "email": username,
      "password": password
    }
    return this.http.post(`${this.host}/api/login`, userCredentials);
  }
  /**
   * Calls API to get number of users 
   */
  listUsers(){
    return this.http.get(`${this.host}/api/users?per_page=6`);
  }
  /**
   * Calls API to get single user
   * @param id 
   */
  getUser(id){
    return this.http.get(`${this.host}/api/users/${id}`);
  }
  /**
   * Calls API to delete single user 
   * @param id 
   */
  deleteUser(id){ 
    return this.http.delete(`${this.host}/api/users/${id}`);    
  }
  addUser(name, job){
    var userCredentials={
      "name": name,
      "job": job
    }
    return this.http.post(`${this.host}/api/users`, userCredentials);    
  }
}
