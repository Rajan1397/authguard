import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any = [
    {username: "Aman", password: "123456"},
    {username: "Prateek", password: "12345"},
    {username: "Ramesh", password: "981165"},
    {username: "Rajan", password: "981165"},



  ]
  constructor() { }
}
