import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";

@Injectable()
export class UserRepository {
    private users: User[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getUsers().subscribe(data => {
            this.users = data;
        })
    }

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number): any {
        return this.users.find(user => user.id == id)
    }

    createUser(user: User): Observable<User> {
        return this.dataSource.saveUser(user);
    }    
}