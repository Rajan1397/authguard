import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  isLogged: boolean = false;
  users: any = [];

  constructor(
    private userService: UserService
  ) { 
    this.users = this.userService.user;
  }

  login(username: string, password: string): boolean {
    // Check if the provided username and password match any user in the users array
    let user = this.users.find((user: any) => {
      return user.username === username && user.password === password;
    });
  
    // If a matching user is found, set isLogged to true; otherwise, set it to false
    this.isLogged = !!user; // Double negation to convert user to boolean
  
    return this.isLogged;
  }
  

  logout(){
   this.isLogged = false;
   return this.isLogged;
  }

  isAuthenticated(){
    return this.isLogged;
  }
}
