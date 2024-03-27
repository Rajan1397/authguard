import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
users: any = [];
isLogged: boolean = false;
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  this.users =  this.userService.user;
  console.log("--users allowed--", this.users)
  }
  login() {
    // Retrieve username and password values from the form
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Here you can implement your login logic
    // For now, let's just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form fields after logging in
    (document.getElementById('username') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';

 this.isLogged =  Boolean(this.authService.login(username, password));
    if(this.isLogged){
      alert("You are logged in successfully");
    }
    else {
      alert("invalid Login Credentials");
    }

  }
  logout(){
    this.isLogged = this.authService.logout();
  }

}
