import { Injectable } from '@angular/core';
import { UserRegister } from "../model/user.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserRegister[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getUsers().subscribe(data => {
        this.users = data;
    })
  }

  getUsers(): UserRegister[] {
      return this.users;
  }

  getUser(id: number): any {
      return this.users.find(user => user.id == id)
  }

  createUser(user: UserRegister): Observable<UserRegister> {
      return this.dataSource.saveUser(user);
  }   
}
